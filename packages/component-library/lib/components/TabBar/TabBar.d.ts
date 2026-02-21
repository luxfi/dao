import { BoxProps } from "@mui/material";
import { FC } from "react";
import { NavLinkProps } from "react-router-dom";
export interface PARSTabBarProps extends BoxProps {
    to?: NavLinkProps["to"];
    items: {
        label: string;
        to?: NavLinkProps["to"];
        href?: string;
        end?: boolean;
        isActive?: boolean;
    }[];
    className?: string;
    href?: string;
    /**
     * Set this to true to use RouterLinks instead of NavLinks and manage active state independently of react router
     */
    disableRouting?: boolean;
}
/**
 * Component for Displaying TabBar
 */
declare const TabBar: FC<PARSTabBarProps>;
export default TabBar;
//# sourceMappingURL=TabBar.d.ts.map