import { OutlinedInputProps } from "@mui/material";
import { FC, ReactElement } from "react";
import tokenPath from "../Token/tokensLib";
export interface PARSSwapCardProps extends OutlinedInputProps {
    id: string;
    endString?: string;
    endStringOnClick?: () => void;
    token?: keyof typeof tokenPath | ReactElement | Element;
    tokenName?: string;
    placeholder?: string;
    usdValue?: string;
    info?: ReactElement | string;
    tokenOnClick?: () => void;
    inputWidth?: string;
}
declare const SwapCard: FC<PARSSwapCardProps>;
export default SwapCard;
//# sourceMappingURL=SwapCard.d.ts.map