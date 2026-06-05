# Lux Governance — Multisig Signer Policy

**Status**: Active 2026-06-05 → next rotation TBD
**Owners of this doc**: Lux Industries protocol governance

## Scope

This document is the canonical record of the launch-time multisig signer
configuration for production Safe deployments across the Lux network of
blockchains (Lux primary, Hanzo L2, Zoo L2, Pars L2, SPC L2, Osage L2 and
all corresponding testnet/devnet pairs).

It is the **only** place the signer derivation, threshold, and rotation
plan live. Any code that constructs a launch-time Safe (notably
`lux/standard/contracts/script/DeploySafe.s.sol`) reads these constants
back from this doc — when they change, the doc changes first.

## Launch-time signer set

| Slot | Derivation path (BIP44, ETH cointype 60) | Role |
|------|------------------------------------------|------|
| 0    | `m/44'/60'/0'/0/0` (LUX_MNEMONIC)        | Founder operator (deployer) |
| 1    | `m/44'/60'/0'/0/1` (LUX_MNEMONIC)        | Co-founder operator |
| 2    | `m/44'/60'/0'/0/2` (LUX_MNEMONIC)        | Security lead |
| 3    | `m/44'/60'/0'/0/3` (LUX_MNEMONIC)        | Treasury / operations lead |
| 4    | `m/44'/60'/0'/0/4` (LUX_MNEMONIC)        | Engineering lead |

All five slots derive from the **same** `LUX_MNEMONIC` seed for launch.
This is intentional and time-bounded: launch-time signers exist to
deploy the rest of the stack and immediately hand off control. Each
hardware-key holder will replace their derived slot via the standard
Safe owner-management flow (`addOwnerWithThreshold` →  `removeOwner` or
`swapOwner`) once the deploy completes.

## Threshold

- **Production multisigs (mainnet)**: **3 of 5** (default)
- **Testnet / devnet multisigs**: **2 of 5** is acceptable, set via
  `SAFE_THRESHOLD=2` at deploy time.
- Hard ceiling: threshold ≤ owner count (`SIGNER_COUNT = 5`).
- Threshold ≥ 1.

`DeploySafe.s.sol` reads `SAFE_THRESHOLD` from env; default is 3.

## Deterministic predictability

The Safe proxy address per (brand, env, chainId) is deterministic by
construction:

```
saltNonce = uint256(keccak256(abi.encode(BRAND, SAFE_ENV, block.chainid)))
proxy   = SafeProxyFactory.createProxyWithNonce(singleton, setupCalldata, saltNonce)
```

so re-running the deploy script against the same `(brand, env,
chainId)` produces the **same proxy address** (the second call will
revert with the upstream Safe "creation failed" error rather than
overwriting). This is the intended behaviour — it gives reviewers a
way to pre-compute proxy addresses for spec docs without trusting any
live broadcast.

## Rotation plan (post-launch, before mainnet bridge activation)

1. Each of the five hardware-key holders signs a registration message
   committing their hardware-derived address to a public proof file at
   `~/work/lux/dao/signers/<slot>.proof`.
2. The Safe is reconfigured **per-brand**: each brand's Safe receives a
   per-brand owner set drawn from the same five hardware keys, possibly
   with brand-specific advisor seats added.
3. After every brand's Safe is rotated, the launch-time derived
   addresses are removed via `removeOwner`. The launch-time mnemonic
   key chain is then no longer authoritative for any Safe.

Rotation must happen **before** the BridgeV4 activation timestamp on
mainnet (≥ 2026-08-08 per `~/work/lux/genesis/configs/mainnet/upgrade.json`).
If the rotation is not complete, BridgeV4 activation must be deferred —
a five-launch-key Safe is fine for protocol bringup but not for
holding bridge fee receivership in production steady-state.

## Per-chain Safe deployment manifest

Each (brand, env) Safe address is recorded in:

```
~/work/lux/standard/deployments/brand-l1-<env>/<brand>.json
  .contracts.Safe
```

The same Safe is used as the `protocolFeeController` in
`~/work/lux/genesis/configs/mainnet/upgrade.json` once activation lands.

## Why not Snowdrop-style governance now

A Snowdrop-style on-chain proposal flow with `Timelock + vLUX + GaugeController`
already exists in the Standard contract set (`DeployMultiNetwork.s.sol`
Phase 5) and is intentionally deployed **alongside** the Safe. The Safe
is the operational signer for protocol upgrades during the rotation
window; the Timelock + vLUX path becomes the authoritative governance
route once token distribution lands and quorum is reachable. Until
quorum is reachable, a 3-of-5 Safe is the right amount of friction.

## Anti-patterns explicitly avoided

- **Single-key admin** — never write `admin = deployer` in production
  contracts. Always rotate to the Safe immediately after deploy.
- **Threshold < ⌈n/2⌉** — minority threshold is collusion-friendly. We
  default 3-of-5 and refuse to encode 2-of-5 in production code.
- **Per-app mnemonics** — one `LUX_MNEMONIC` for launch derivation. No
  per-app seeds (those just multiply the number of single-key compromise
  surfaces).
- **Hot-wallet signers on mainnet** — launch-time derived slots get
  removed before bridge mainnet activation.

## Verification

Anyone with `LUX_MNEMONIC` and `forge` can independently reproduce all
five launch-time signers:

```bash
for i in 0 1 2 3 4; do
  cast wallet address \
    --mnemonic "$LUX_MNEMONIC" \
    --mnemonic-index "$i"
done
```

These addresses must match what is logged by `DeploySafe.s.sol`.
