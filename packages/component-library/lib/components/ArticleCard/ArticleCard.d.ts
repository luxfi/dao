import { FC, ReactElement } from "react";
export interface PARSArticleCardProps {
    imageSrc: string;
    title: string;
    publishDate?: string;
    content: string | ReactElement | Element;
    href?: string;
}
/**
 * Component for Displaying ArticleCard
 */
declare const ArticleCard: FC<PARSArticleCardProps>;
export default ArticleCard;
//# sourceMappingURL=ArticleCard.d.ts.map