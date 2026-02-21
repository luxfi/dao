import { FC } from "react";
import { PARSTokenProps } from "../Token";
import { PARSTokenStackProps } from "../TokenStack";
export interface PARSItemCardProps {
    title?: string;
    value?: string | number;
    roi?: string | number;
    tokens?: PARSTokenStackProps["tokens"];
    days?: string;
    href?: string;
    external?: boolean;
    hrefText?: string;
    disableFlip?: boolean;
    networkName?: PARSTokenProps["name"];
}
/**
 * Component for Displaying ItemCard
 */
declare const ItemCard: FC<PARSItemCardProps>;
export default ItemCard;
//# sourceMappingURL=ItemCard.d.ts.map