import { FC } from "react";
export interface PARSVoteBreakdownProps {
    /**
     * Text Label: For Vote
     */
    voteForLabel?: string;
    /**
     * Text Label: Against Vote
     */
    voteAgainstLabel?: string;
    /**
     * Text Label: Participaation
     */
    voteParticipationLabel?: string;
    /**
     * Number of Votes For
     */
    voteForCount?: number;
    /**
     * Number of Votes Against
     */
    voteAgainstCount?: number;
    /**
     * Number of Wallets that can vote
     */
    totalHoldersCount?: number;
    /**
     * Number of Votes Needed for Quorum
     */
    quorum?: number;
}
/**
 * Component for Displaying Vote Breakdowns
 */
declare const VoteBreakdown: FC<PARSVoteBreakdownProps>;
export default VoteBreakdown;
//# sourceMappingURL=VoteBreakdown.d.ts.map