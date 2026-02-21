import { FC } from "react";
export declare type PARSProposalStatus = "discussion" | "ready to activate" | "expired activation" | "active" | "executed" | "draft" | "closed";
export interface PARSProposalProps {
    /**
     * Returns appropriate chip label and card styling depending on status passed
     */
    status: PARSProposalStatus;
    /**
     * Label for the Chip
     */
    chipLabel?: string;
    /**
     * Voting End Date
     */
    voteEndDate: Date;
    /**
     * Title of the Proposal;
     */
    proposalTitle: string;
    /**
     * Date Proposa was Published
     */
    publishedDate: Date;
    /**
     * Count of Votes For
     */
    votesFor?: number;
    /**
     * Count of Votes Against
     */
    votesAgainst?: number;
    /**
     * Count of Quorum needed
     */
    quorum?: number;
}
/**
 * Component for Displaying A Single Governance Proposal Card
 */
declare const Proposal: FC<PARSProposalProps>;
export default Proposal;
//# sourceMappingURL=Proposal.d.ts.map