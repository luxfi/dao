/// <reference types="react" />
import { Accordion, PARSAccordionProps } from "./components/Accordion";
import { Alert, PARSAlertProps } from "./components/Alert";
import { ArticleCard, PARSArticleCardProps } from "./components/ArticleCard";
import { AssetCard, PARSAssetCardProps } from "./components/AssetCard";
import { PARSButtonProps, PrimaryButton, SecondaryButton, TertiaryButton, TextButton } from "./components/Button";
import { Chip, PARSChipProps } from "./components/Chip";
import { DataRow, PARSDataRowProps } from "./components/DataRow";
import { DottedDataRow, PARSDottedDataRowProps } from "./components/DottedDataRow";
import { GetOnButton, PARSGetOnButtonProps } from "./components/GetOnButton";
import { Icon, PARSIconProps } from "./components/Icon";
import { InfoCard, PARSInfoCardProps } from "./components/InfoCard";
import { InfoTooltip, InfoTooltipMulti, PARSInfoTooltipProps } from "./components/InfoTooltip";
import { Input, PARSInputProps } from "./components/Input";
import { InputWrapper, PARSInputWrapperProps } from "./components/InputWrapper";
import { ItemCard, PARSItemCardProps } from "./components/ItemCard";
import { LocaleSwitcher, PARSLocaleSwitcherProps } from "./components/LocaleSwitcher";
import { Metric, MetricCollection, PARSMetricProps } from "./components/Metric";
import { MiniCard, PARSMiniCardProps } from "./components/MiniCard";
import { Modal, PARSModalProps } from "./components/Modal";
import { NavItem, PARSNavItemProps } from "./components/NavItem";
import { DefaultNotification, ErrorNotification, InfoNotification, PARSNotificationProps, SuccessNotification, WarningNotification } from "./components/Notification";
import { PARSPaperProps, Paper } from "./components/Paper";
import { PARSProgressCircleProps, ProgressCircle } from "./components/ProgressCircle";
import Proposal, { PARSProposalProps } from "./components/Proposal";
import { PARSRadioProps, Radio } from "./components/Radio";
import { PARSSliderProps, Slider } from "./components/Slider";
import SwapCard, { PARSSwapCardProps } from "./components/SwapCard";
import SwapCollection, { PARSSwapCollectionProps } from "./components/SwapCollection";
import { PARSTabBarProps, TabBar } from "./components/TabBar";
import { ParsTabsProps, Tab, TabPanel, Tabs } from "./components/Tabs";
import { PARSTokenProps, Token } from "./components/Token";
import { PARSTokenStackProps, TokenStack } from "./components/TokenStack";
import Tooltip, { PARSTooltipProps } from "./components/Tooltip";
import { PARSTransactionRowProps, TransactionRow } from "./components/TransactionRow";
import VoteBreakdown, { PARSVoteBreakdownProps } from "./components/VoteBreakdown";
import { PARSWalletBalanceProps, WalletBalance } from "./components/WalletBalance";
declare module "@mui/material/styles" {
    interface ThemeOptions {
        colors: {
            paper: {
                background: React.CSSProperties["background"];
                card: React.CSSProperties["color"];
                cardHover: React.CSSProperties["color"];
            };
            feedback: {
                success: React.CSSProperties["color"];
                userFeedback: React.CSSProperties["color"];
                error: React.CSSProperties["color"];
                warning: React.CSSProperties["color"];
                pnlGain: React.CSSProperties["color"];
            };
            gray: {
                700: React.CSSProperties["color"];
                600: React.CSSProperties["color"];
                500: React.CSSProperties["color"];
                90: React.CSSProperties["color"];
                40: React.CSSProperties["color"];
                10: React.CSSProperties["color"];
            };
            primary: {
                300: React.CSSProperties["color"];
                100: React.CSSProperties["color"];
            };
            special: {
                parsZaps: React.CSSProperties["color"];
            };
        };
        special: any;
    }
    interface Theme {
        colors: {
            paper: {
                background: React.CSSProperties["background"];
                card: React.CSSProperties["color"];
                cardHover: React.CSSProperties["color"];
            };
            feedback: {
                success: React.CSSProperties["color"];
                userFeedback: React.CSSProperties["color"];
                error: React.CSSProperties["color"];
                warning: React.CSSProperties["color"];
                pnlGain: React.CSSProperties["color"];
            };
            gray: {
                700: React.CSSProperties["color"];
                600: React.CSSProperties["color"];
                500: React.CSSProperties["color"];
                90: React.CSSProperties["color"];
                40: React.CSSProperties["color"];
                10: React.CSSProperties["color"];
            };
            primary: {
                300: React.CSSProperties["color"];
                100: React.CSSProperties["color"];
            };
            special: {
                parsZaps: React.CSSProperties["color"];
            };
        };
    }
}
export { PrimaryButton, SecondaryButton, TertiaryButton, TextButton, Paper, Metric, MetricCollection, DataRow, InfoTooltip, InfoTooltipMulti, Modal, DefaultNotification, ErrorNotification, InfoNotification, SuccessNotification, WarningNotification, NavItem, Icon, Accordion, TokenStack, Token, LocaleSwitcher, Input, Alert, Tabs, Tab, TabPanel, InputWrapper, TransactionRow, WalletBalance, Slider, ProgressCircle, InfoCard, GetOnButton, DottedDataRow, ArticleCard, Radio, TabBar, ItemCard, AssetCard, MiniCard, Chip, Proposal, VoteBreakdown, Tooltip, SwapCard, SwapCollection, };
export type { PARSTokenProps, PARSTokenStackProps, PARSAccordionProps, PARSInputProps, PARSModalProps, PARSInfoTooltipProps, PARSNotificationProps, PARSMetricProps, PARSDataRowProps, PARSNavItemProps, PARSLocaleSwitcherProps, PARSIconProps, PARSPaperProps, PARSButtonProps, PARSAlertProps, ParsTabsProps, PARSInputWrapperProps, PARSTransactionRowProps, PARSWalletBalanceProps, PARSSliderProps, PARSProgressCircleProps, PARSInfoCardProps, PARSGetOnButtonProps, PARSDottedDataRowProps, PARSArticleCardProps, PARSRadioProps, PARSTabBarProps, PARSItemCardProps, PARSAssetCardProps, PARSMiniCardProps, PARSChipProps, PARSProposalProps, PARSVoteBreakdownProps, PARSTooltipProps, PARSSwapCardProps, PARSSwapCollectionProps, };
//# sourceMappingURL=index.d.ts.map