import { AlertProps } from "@mui/material";
import { FC } from "react";
export interface PARSNotificationProps extends AlertProps {
    template?: "info" | "success" | "error" | "default" | "warning";
    dismissible?: boolean;
    /** To manage show/hide state in parent. Pass setState here */
    onDismiss?: () => void;
    /** To manage show/hide state in the parent. Pass useState here */
    show?: boolean;
    square: boolean;
}
/**
 * Primary Notification Component for UI.
 *
 * ### Controlling Notification State.
 * This component manages its own state, however if you encounter a scenario where you need to handle
 * the state in the parent component you can leverage the onDismiss and show props
 *
 * ```jsx
 * const [open, setOpen] = useState(true);
 * <DefaultNotification show={open} onDismiss={() => setOpen(false)} dismissible >
 *   This is a dismissible notification with custom width
 * </DefaultNotification>
 * ```
 *
 * ```jsx
 * <Button onClick={() => setOpen(true)}>
 *   Reappear After Dismiss
 * </Button>
 *
 * ```
 *
 */
declare const Notification: FC<PARSNotificationProps>;
export default Notification;
//# sourceMappingURL=Notification.d.ts.map