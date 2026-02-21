import { FC, ReactElement } from "react";
export interface PARSInfoCardProps {
    status?: "active" | "closed" | "passed" | "failed";
    statusLabel?: string;
    title?: string;
    content?: string | ReactElement | Element;
    timeRemaining?: string;
    href?: string;
}
/**
 * Component for Displaying InfoCard
 */
declare const InfoCard: FC<PARSInfoCardProps>;
export default InfoCard;
//# sourceMappingURL=InfoCard.d.ts.map