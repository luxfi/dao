// @luxfi/governance-hooks
// Shared governance hooks for Lux DAO ecosystem (Lux, Pars, Zoo)

export { useGetProposals, type Proposal } from './useGetProposals'
export { useGetProposalDetails } from './useGetProposalDetails'
export { useVoteForProposal, type VoteSupport } from './useVoteForProposal'
export { useDelegateVoting } from './useDelegateVoting'
export { useGetVotingWeight } from './useGetVotingWeight'
export { useExecuteProposal } from './useExecuteProposal'

// Proposal states enum
export enum ProposalState {
  Pending = 0,
  Active = 1,
  Canceled = 2,
  Defeated = 3,
  Succeeded = 4,
  Queued = 5,
  Expired = 6,
  Executed = 7,
}

// Helper to get state label
export const getProposalStateLabel = (state: number): string => {
  const labels = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed']
  return labels[state] || 'Unknown'
}
