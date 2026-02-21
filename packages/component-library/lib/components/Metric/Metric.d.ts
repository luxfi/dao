import { TypographyTypeMap } from "@mui/material";
import { SkeletonTypeMap } from "@mui/material";
import { FC, ReactElement } from "react";
export interface PARSMetricProps {
    className?: string;
    label?: string;
    metric?: string | ReactElement;
    isLoading?: boolean;
    labelVariant?: TypographyTypeMap["props"]["variant"];
    metricVariant?: TypographyTypeMap["props"]["variant"];
    tooltip?: string;
    loadingWidth?: SkeletonTypeMap["props"]["width"];
}
/**
 * Primary Metric Component for UI. Presents a label and metric with optional tooltip.
 */
declare const Metric: FC<PARSMetricProps>;
export default Metric;
//# sourceMappingURL=Metric.d.ts.map