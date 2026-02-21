import { OutlinedInputProps } from "@mui/material";
import { FC } from "react";
import tokenPath from "../Token/tokensLib";
export interface PARSInputWrapperProps extends OutlinedInputProps {
    id: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    endString?: string;
    endStringOnClick?: () => void;
    startAdornment?: keyof typeof tokenPath;
    buttonText: string;
    buttonOnClick?: () => void;
    buttonType?: string;
    disabled?: boolean;
}
declare const InputWrapper: FC<PARSInputWrapperProps>;
export default InputWrapper;
//# sourceMappingURL=InputWrapper.d.ts.map