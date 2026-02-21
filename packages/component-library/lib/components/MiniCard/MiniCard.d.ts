import { FC } from "react";
import { PARSTokenProps } from "../Token";
import { PARSTokenStackProps } from "../TokenStack";
export interface PARSMiniCardProps {
    title?: string;
    href?: string;
    label?: string;
    icon?: PARSTokenProps["name"] | PARSTokenStackProps["tokens"];
}
/**
 * Component for Displaying MiniCard
 */
declare const MiniCard: FC<PARSMiniCardProps>;
export default MiniCard;
//# sourceMappingURL=MiniCard.d.ts.map