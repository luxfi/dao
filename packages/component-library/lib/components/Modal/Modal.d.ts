import { ModalProps } from "@mui/material";
import { FC, ReactElement } from "react";
export interface PARSModalProps extends ModalProps {
    /** Header Text for Modal */
    headerText?: string;
    /** Define the minimum height of the modal. Ex: 600px or 100% */
    minHeight?: string;
    /** Define the maximum width of the modal. Ex: 600px or 100% */
    maxWidth?: string;
    /** Specify the position of the close icon. Top left or right */
    closePosition?: "left" | "right";
    /** Custom content for Top Right Position. Prioritized over closePosition */
    topRight?: ReactElement;
    /** Custom content for Top Left Position. Prioritized over closePosition */
    topLeft?: ReactElement;
    /** Used to specify a custom header instead of using the default headerText prop. */
    headerContent?: ReactElement;
    /** Specify additional modal classes. */
    className?: string;
}
/**
 * Primary Modal Component for UI. This component inherits the Paper component and displays it in a modal.
 *
 * ### Controlling Modal State.
 * ```typescript
 * const [open, setOpen] = useState(true);
 * const handleClose = () => {
 *  setOpen(false);
 * };
 * const handleOpen = () => {
 *  setOpen(true);
 * };
 *
 * ```
 * ```jsx
 *  <Modal
 *    onClose={handleClose}
 *    open={open}
 *  >
 *  This can be any type of content
 *  </Modal>
    ```
 */
declare const Modal: FC<PARSModalProps>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map