import { SvgIconProps } from "@mui/material";
import { FC } from "react";
import { PARSTokenProps } from "../Token";
export interface PARSTokenStackProps extends SvgIconProps {
    tokens?: PARSTokenProps["name"][];
    style?: SvgIconProps["style"];
    images?: string[];
    network?: PARSTokenProps["name"];
}
declare const TokenStack: FC<PARSTokenStackProps>;
export default TokenStack;
//# sourceMappingURL=TokenStack.d.ts.map