import { PaperProps } from "@mui/material";
import { FC, ReactElement } from "react";
export interface PARSPaperProps extends PaperProps {
    /** Header Text for Paper */
    headerText?: string;
    /** Sub Header for Paper */
    subHeader?: ReactElement;
    /** Header Chip for Paper */
    headerChip?: string;
    tooltip?: string;
    /** Used to specify a custom header instead of using the default headerText and subHeader prop. */
    headerContent?: ReactElement;
    /** Make Paper Width 100% */
    fullWidth?: boolean;
    /** Custom content for Top Right Position. */
    topLeft?: ReactElement;
    /** Custom content for Top Right Position. */
    topRight?: ReactElement;
    /**Zoom Animation. Defaults to True. Set to False to disable zoom on load */
    zoom?: boolean;
    /** Enable Paper backgrounds for child paper components */
    enableBackground?: boolean;
}
/**
 * Primary Paper Component for UI.
 */
declare const Paper: FC<PARSPaperProps>;
export default Paper;
//# sourceMappingURL=Paper.d.ts.map