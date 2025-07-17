import { AccordionBlock } from "@/components/blocks/AccordionBlock";
import { ButtonBlock } from "@/components/blocks/ButtonBlock";
import { ButtonCard } from "@/components/blocks/ButtonCard";
import { CircleImageCard } from "@/components/blocks/CircleImageCard";
import { FourColumnLayout } from "@/components/blocks/FourColumnLayout";
import { GalleryGrid } from "@/components/blocks/GalleryGrid";
import { HeroBannerBlock } from "@/components/blocks/HeroBannerBlock";
import { ImageBlock } from "@/components/blocks/ImageBlock";
import { ImageCard } from "@/components/blocks/ImageCard";
import { ImageCarousel } from "@/components/blocks/ImageCarousel";
import { ImageText } from "@/components/blocks/ImageText";
import { LinkBlock } from "@/components/blocks/LinkBlock";
import { MediaGridBlock } from "@/components/blocks/MediaGridBlock";
import { MissionBlock } from "@/components/blocks/MissionBlock";
import { ModalImage } from "@/components/blocks/ModalImage";
import { ParagraphBlock } from "@/components/blocks/ParagraphBlock";
import { PdfViewerBlock } from "@/components/blocks/PdfViewerBlock";
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
  PageBlocksLink_block: LinkBlock,
  PageBlocksButton_block: ButtonBlock,
  PageBlocksMission_block: MissionBlock,

  // Cards
  PageBlocksVanilla_card: VanillaCard,
  PageBlocksButton_card: ButtonCard,
  PageBlocksImage_card: ImageCard,
  PageBlocksCircle_Image_Card: CircleImageCard,
  PageBlocksThree_columnThreeColumnLayoutColumnsCircle_image_card:
    CircleImageCard,
  PageBlocksImage_text: ImageText,
  PageBlocksTwo_columnTwoColumnLayoutColumnsImage_text_block: ImageText,
  PageBlocksTwo_columnTwoColumnLayoutColumnsGallery_grid: GalleryGrid,
  PageBlocksFour_columnFourColumnLayoutColumnsButton_card: ButtonCard,

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
  PageBlocksTwo_columnTwoColumnLayoutColumnsImage_block: ImageBlock,
  PageBlocksThree_columnThreeColumnLayoutColumnsImage_text_block: ImageText,
  PageBlocksFour_columnFourColumnLayoutColumnsImage_card: ImageCard,
  PageBlocksTwo_columnTwoColumnLayoutColumnsImage_card: ImageCard,
  PageBlocksThree_columnThreeColumnLayoutColumnsVanilla_card: VanillaCard,

  // Interactive
  PageBlocksAccordion: AccordionBlock,
  PageBlocksTable_block: TableBlock,
  PageBlocksGrid_block: MediaGridBlock,
  PageBlocksTab_view: TabViewBlock,
  PageBlocksImage_block: ImageBlock,
  PageBlocksYoutube_block: YoutubeBlock,
  PageBlocksImage_carousel: ImageCarousel,
  PageBlocksPdf_viewer: PdfViewerBlock,
  PageBlocksImage_text_block: ImageText,

  // Hero & Timeline
  PageBlocksHero_banner: HeroBannerBlock,
  PageBlocksVideo_banner: VideoBannerBlock,
  PageBlocksTimeline: TimelineBlock,
};

function toPascalCase(input: string): string {
  return input
    .split(/_|-/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function resolveComponentFromTypename(
  typename: string
): React.FC<any> | undefined {
  const parts = typename.split(/Columns|TabsContent|_/);
  const lastPart = parts[parts.length - 1]; // e.g. "image_block"
  const componentName = toPascalCase(lastPart); // "ImageBlock"
  return blockComponents[componentName];
}
