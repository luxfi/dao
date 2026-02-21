import { AlertProps } from "@mui/material";
import { FC } from "react";
export interface PARSAlertProps {
    open: boolean;
    severity: AlertProps["severity"];
    title: string;
    text: string;
    onClose: () => void;
    progress: number;
}
declare const Alert: FC<PARSAlertProps>;
export default Alert;
//# sourceMappingURL=Alert.d.ts.map