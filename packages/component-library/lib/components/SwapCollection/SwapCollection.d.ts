import { FC, ReactElement } from "react";
import { PARSSwapCardProps } from "../SwapCard";
export interface PARSSwapCollectionProps {
    UpperSwapCard: ReactElement<PARSSwapCardProps>;
    LowerSwapCard: ReactElement<PARSSwapCardProps>;
    arrowOnClick?: () => void;
}
/**
 * Component for Displaying SwapCollection
 */
declare const SwapCollection: FC<PARSSwapCollectionProps>;
export default SwapCollection;
//# sourceMappingURL=SwapCollection.d.ts.map