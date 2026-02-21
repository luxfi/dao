import { useWriteContract, useWaitForTransactionReceipt, useReadContract, useAccount } from 'wagmi'

const VOTES_ABI = [
  {
    name: 'delegate',
    type: 'function',
    inputs: [{ name: 'delegatee', type: 'address' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    name: 'delegates',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
] as const

export interface UseDelegateVotingOptions {
  votesTokenAddress: `0x${string}`
}

export function useDelegateVoting({ votesTokenAddress }: UseDelegateVotingOptions) {
  const { address } = useAccount()
  const { data: hash, writeContract, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  const { data: currentDelegate, refetch: refetchDelegate } = useReadContract({
    address: votesTokenAddress,
    abi: VOTES_ABI,
    functionName: 'delegates',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  const delegate = async (delegatee: string) => {
    writeContract({
      address: votesTokenAddress,
      abi: VOTES_ABI,
      functionName: 'delegate',
      args: [delegatee as `0x${string}`],
    })
  }

  const selfDelegate = async () => {
    if (address) {
      delegate(address)
    }
  }

  return {
    delegate,
    selfDelegate,
    currentDelegate: currentDelegate as string | undefined,
    isPending,
    isConfirming,
    isSuccess,
    hash,
    error,
    refetchDelegate,
  }
}
