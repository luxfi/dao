import { FC } from "react";
import { PARSTokenStackProps } from "../TokenStack";
export interface PARSAssetCardProps {
    token?: PARSTokenStackProps["tokens"];
    timeRemaining?: string;
    assetValue?: string | number;
    assetBalance?: string | number;
    pnl?: string | number;
    label?: string;
    pnlColor?: "green" | "red";
    ctaText?: string;
    lineThreeLabel?: string;
    lineThreeValue?: string | number;
    ctaOnClick?: () => void;
}
/**
 * Asset Card Component for Wallet.
 */
declare const AssetCard: FC<PARSAssetCardProps>;
export default AssetCard;
//# sourceMappingURL=AssetCard.d.ts.map