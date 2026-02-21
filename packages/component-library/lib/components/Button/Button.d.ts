import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { IconName } from "../Icon";
export interface PARSButtonProps extends ButtonProps {
    template?: "primary" | "secondary" | "tertiary" | "text" | "success" | "feedback";
    icon?: IconName;
    onClick?: any;
    startIconName?: IconName;
    endIconName?: IconName;
    loading?: boolean;
}
/**
 * Primary Button Component for UI.
 */
declare const Button: FC<PARSButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map