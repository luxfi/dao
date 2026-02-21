import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

const GOVERNOR_ABI = [
  {
    name: 'queue',
    type: 'function',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    name: 'execute',
    type: 'function',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [],
    stateMutability: 'payable',
  },
] as const

export interface UseExecuteProposalOptions {
  governorAddress: `0x${string}`
}

export function useExecuteProposal({ governorAddress }: UseExecuteProposalOptions) {
  const { data: hash, writeContract, isPending, error } = useWriteContract()

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  })

  const queue = async (proposalId: string) => {
    writeContract({
      address: governorAddress,
      abi: GOVERNOR_ABI,
      functionName: 'queue',
      args: [BigInt(proposalId)],
    })
  }

  const execute = async (proposalId: string) => {
    writeContract({
      address: governorAddress,
      abi: GOVERNOR_ABI,
      functionName: 'execute',
      args: [BigInt(proposalId)],
    })
  }

  return {
    queue,
    execute,
    isPending,
    isConfirming,
    isSuccess,
    hash,
    error,
  }
}
