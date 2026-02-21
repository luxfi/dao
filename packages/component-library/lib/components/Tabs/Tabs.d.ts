import { TabsProps } from "@mui/material";
import React from "react";
declare type Props = Omit<TabsProps, "TouchRippleProps" | "onFocusVisible" | "focusRipple" | "focusVisibleClassName" | "centerRipple" | "disableRipple" | "disableTouchRipple">;
export interface ParsTabsProps extends Props {
    className?: string;
}
declare const Tabs: React.FC<ParsTabsProps>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map