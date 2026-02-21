import { AccordionProps } from "@mui/material";
import { FC, ReactChild, ReactElement, ReactFragment, ReactPortal } from "react";
export interface PARSAccordionProps extends AccordionProps {
    summary: ReactElement;
    children: boolean | ReactChild | ReactFragment | ReactPortal;
    /** Disables clicking on entire row to expand/collapse and only expands/collapses when arrow is clicked */
    arrowOnlyCollapse?: boolean;
}
/**
 * Accordion Component for UI.
 */
declare const Accordion: FC<PARSAccordionProps>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map