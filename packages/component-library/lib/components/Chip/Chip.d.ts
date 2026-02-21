import { ChipProps } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { FC } from "react";
export interface PARSChipProps extends ChipProps {
    template?: keyof ThemeOptions["colors"]["feedback"] | "purple" | "gray" | "darkGray";
    strong?: boolean;
}
/**
 * Component for Displaying Chip
 */
declare const Chip: FC<PARSChipProps>;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map