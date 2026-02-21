import { useReadContract, useAccount } from 'wagmi'

const VOTES_ABI = [
  {
    name: 'getVotes',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    name: 'getPastVotes',
    type: 'function',
    inputs: [
      { name: 'account', type: 'address' },
      { name: 'blockNumber', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

export interface UseGetVotingWeightOptions {
  votesTokenAddress: `0x${string}`
  blockNumber?: bigint
}

export function useGetVotingWeight({ votesTokenAddress, blockNumber }: UseGetVotingWeightOptions) {
  const { address } = useAccount()

  const { data: currentVotes, isLoading: isLoadingCurrent } = useReadContract({
    address: votesTokenAddress,
    abi: VOTES_ABI,
    functionName: 'getVotes',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  const { data: pastVotes, isLoading: isLoadingPast } = useReadContract({
    address: votesTokenAddress,
    abi: VOTES_ABI,
    functionName: 'getPastVotes',
    args: address && blockNumber ? [address, blockNumber] : undefined,
    query: { enabled: !!address && !!blockNumber },
  })

  const votes = currentVotes ? Number(currentVotes) / 1e18 : 0
  const pastVotesNum = pastVotes ? Number(pastVotes) / 1e18 : 0

  return {
    votes,
    pastVotes: pastVotesNum,
    votesFormatted: votes.toLocaleString(undefined, { maximumFractionDigits: 2 }),
    isLoading: isLoadingCurrent || isLoadingPast,
  }
}
