import { AccordionBlock } from "@/components/blocks/AccordionBlock";
import { ButtonCard } from "@/components/blocks/ButtonCard";
import { FourColumnLayout } from "@/components/blocks/FourColumnLayout";
import { GalleryGrid } from "@/components/blocks/GalleryGrid";
import { HeroBannerBlock } from "@/components/blocks/HeroBannerBlock";
import { ImageBlock } from "@/components/blocks/ImageBlock";
import { ImageCard } from "@/components/blocks/ImageCard";
import { ImageCarousel } from "@/components/blocks/ImageCarousel";
import { MediaGridBlock } from "@/components/blocks/MediaGridBlock";
import { ModalImage } from "@/components/blocks/ModalImage";
import { ParagraphBlock } from "@/components/blocks/ParagraphBlock";
import { QuoteBlock } from "@/components/blocks/QuoteBlock";
import { Separator } from "@/components/blocks/Separator";
import { SubtitleBlock } from "@/components/blocks/SubtitleBlock";
import { TableBlock } from "@/components/blocks/TableBlock";
import { TabViewBlock } from "@/components/blocks/TabViewBlock";
import { ThreeColumnLayout } from "@/components/blocks/ThreeColumnLayout";
import { TimelineBlock } from "@/components/blocks/TimelineBlock";
import { TitleBlock } from "@/components/blocks/TitleBlock";
import { TwoColumnLayout } from "@/components/blocks/TwoColumnLayout";
import { VanillaCard } from "@/components/blocks/VanillaCard";
import { VideoBannerBlock } from "@/components/blocks/VideoBannerBlock";
import { YoutubeBlock } from "@/components/blocks/YoutubeBlock";

export const blockComponents: Record<string, React.FC<any>> = {
  // Basic Text
  PageBlocksTitle_block: TitleBlock,
  PageBlocksSubtitle_block: SubtitleBlock,
  PageBlocksQuote_block: QuoteBlock,
  PageBlocksSeparator: Separator,
  PageBlocksParagraph_block: ParagraphBlock,

  // Cards
  PageBlocksVanilla_card: VanillaCard,
  PageBlocksButton_card: ButtonCard,
  PageBlocksImage_card: ImageCard,

  // Media
  PageBlocksModal_image: ModalImage,

  // Layouts
  PageBlocksTwo_column: TwoColumnLayout,
  PageBlocksThree_column: ThreeColumnLayout,
  PageBlocksFour_column: FourColumnLayout,
  PageBlocksThree_columnThreeColumnLayoutColumnsButton_card: ButtonCard,
  PageBlocksThree_columnThreeColumnLayoutColumnsImage_card: ImageCard,
  PageBlocksTwo_columnTwoColumnLayoutColumnsParagraph_block: ParagraphBlock,
  PageBlocksFour_columnFourColumnLayoutColumnsGallery_grid: GalleryGrid,
  PageBlocksTab_viewTabsContentThree_column: ThreeColumnLayout,
  PageBlocksTab_viewTabsContentThree_columnThreeColumnLayoutColumnsGallery_grid:
    GalleryGrid,

  // Interactive
  PageBlocksAccordion: AccordionBlock,
  PageBlocksTable_block: TableBlock,
  PageBlocksGrid_block: MediaGridBlock,
  PageBlocksTab_view: TabViewBlock,
  PageBlocksImage_block: ImageBlock,
  PageBlocksYoutube_block: YoutubeBlock,
  PageBlocksImage_carousel: ImageCarousel,

  // Hero & Timeline
  PageBlocksHero_banner: HeroBannerBlock,
  PageBlocksVideo_banner: VideoBannerBlock,
  PageBlocksTimeline: TimelineBlock,
};
