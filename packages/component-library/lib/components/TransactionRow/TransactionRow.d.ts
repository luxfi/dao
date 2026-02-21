import { FC } from "react";
import { PARSTokenStackProps } from "../TokenStack";
export interface PARSTransactionRowProps {
    assetName: PARSTokenStackProps["tokens"];
    transactionDetails?: string;
    quantity?: string | number;
    usdValue?: string | number;
    hrefText?: string;
    href?: string;
}
/**
 * Component for Displaying Wallet Transaction Row
 */
declare const TransactionRow: FC<PARSTransactionRowProps>;
export default TransactionRow;
//# sourceMappingURL=TransactionRow.d.ts.map