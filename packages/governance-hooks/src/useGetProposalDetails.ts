import { useReadContract } from 'wagmi'

const GOVERNOR_ABI = [
  {
    name: 'proposals',
    type: 'function',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [
      { name: 'id', type: 'uint256' },
      { name: 'proposer', type: 'address' },
      { name: 'eta', type: 'uint256' },
      { name: 'startBlock', type: 'uint256' },
      { name: 'endBlock', type: 'uint256' },
      { name: 'forVotes', type: 'uint256' },
      { name: 'againstVotes', type: 'uint256' },
      { name: 'abstainVotes', type: 'uint256' },
      { name: 'canceled', type: 'bool' },
      { name: 'executed', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    name: 'state',
    type: 'function',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
] as const

export interface UseGetProposalDetailsOptions {
  governorAddress: `0x${string}`
  proposalId: string | undefined
}

export function useGetProposalDetails({ governorAddress, proposalId }: UseGetProposalDetailsOptions) {
  const id = proposalId ? BigInt(proposalId) : undefined

  const { data: proposal, isLoading: isLoadingProposal } = useReadContract({
    address: governorAddress,
    abi: GOVERNOR_ABI,
    functionName: 'proposals',
    args: id ? [id] : undefined,
    query: { enabled: !!id },
  })

  const { data: state } = useReadContract({
    address: governorAddress,
    abi: GOVERNOR_ABI,
    functionName: 'state',
    args: id ? [id] : undefined,
    query: { enabled: !!id },
  })

  const stateMap = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed']

  return {
    proposal: proposal
      ? {
          id: Number(proposal[0]),
          proposer: proposal[1],
          eta: Number(proposal[2]),
          startBlock: Number(proposal[3]),
          endBlock: Number(proposal[4]),
          forVotes: proposal[5],
          againstVotes: proposal[6],
          abstainVotes: proposal[7],
          canceled: proposal[8],
          executed: proposal[9],
        }
      : null,
    state: state !== undefined ? stateMap[state] : 'Unknown',
    isLoading: isLoadingProposal,
  }
}
