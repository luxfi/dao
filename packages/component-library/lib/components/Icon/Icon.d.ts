import { SvgIconProps } from "@mui/material";
import { FC } from "react";
import iconPath from "./iconsLib";
export interface PARSIconProps extends SvgIconProps {
    name: keyof typeof iconPath;
}
declare const Icon: FC<PARSIconProps>;
export default Icon;
export declare type IconName = keyof typeof iconPath;
//# sourceMappingURL=Icon.d.ts.map