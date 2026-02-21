import { OutlinedInputProps } from "@mui/material";
import { FC, ReactElement } from "react";
import tokenPath from "../Token/tokensLib";
export interface PARSInputProps extends OutlinedInputProps {
    id: string;
    label?: string;
    className?: string;
    labelClass?: string;
    helperText?: string;
    endString?: string;
    endStringOnClick?: () => void;
    startAdornment?: keyof typeof tokenPath;
    placeholder?: string;
    info?: ReactElement | string;
}
declare const Input: FC<PARSInputProps>;
export default Input;
//# sourceMappingURL=Input.d.ts.map