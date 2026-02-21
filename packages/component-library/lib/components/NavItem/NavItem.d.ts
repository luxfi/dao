import { LinkProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { PARSChipProps } from "../Chip";
import { IconName } from "../Icon";
export interface PARSNavItemProps extends LinkProps {
    label: string;
    icon?: IconName;
    chip?: string | ReactNode;
    className?: string;
    to?: any;
    /**Will Override to prop. Used for External Links */
    href?: string;
    children?: ReactNode;
    defaultExpanded?: boolean;
    chipColor?: PARSChipProps["template"];
}
/**
 * Primary NavItem Component for UI.
 */
declare const NavItem: FC<PARSNavItemProps>;
export default NavItem;
//# sourceMappingURL=NavItem.d.ts.map