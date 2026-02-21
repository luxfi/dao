import { FC, ReactElement, ReactNode } from "react";
export interface PARSDataRowProps {
    title: string | ReactElement | Element;
    indented?: boolean;
    id?: string;
    balance?: string | ReactElement | Element;
    isLoading?: boolean;
    children?: ReactNode;
    tooltip?: string;
}
declare const DataRow: FC<PARSDataRowProps>;
export default DataRow;
//# sourceMappingURL=DataRow.d.ts.map