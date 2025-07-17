import { Collection } from "tinacms";
import { missionBlock } from "../blocks/missionBlock";
import { paragraphBlock } from "../blocks/paragraphBlock";
import { subtitleBlock } from "../blocks/subtitleBlock";
import { quoteBlock } from "../blocks/quoteBlock";
import { titleBlock } from "../blocks/titleBlock";
import { accordionBlock } from "../blocks/accordionBlock";
import { buttonCardBlock } from "../blocks/buttonCardBlock";
import { vanillaCardBlock } from "../blocks/cardBlock";
import { fourColumnBlock } from "../blocks/fourColumnBlock";
import { heroBannerBlock } from "../blocks/heroBannerBlock";
import { imageCardBlock } from "../blocks/imageCardBlock";
import { mediaGridBlock } from "../blocks/mediaGridBlock";
import { modalImageBlock } from "../blocks/modalImageBlock";
import { tableBlock } from "../blocks/tableBlock";
import { tabViewBlock } from "../blocks/tabViewBlock";
import { threeColumnBlock } from "../blocks/threeColumnBlock";
import { timelineBlock } from "../blocks/timelineBlock";
import { twoColumnBlock } from "../blocks/twoColumnBlock";
import { videoBannerBlock } from "../blocks/videoBannerBlock";
import { separatorBlock } from "../blocks/separatorBlock";
import { imageBlock } from "../blocks/imageBlock";
import { youtubeBlock } from "../blocks/youtubeBlock";
import { carouselBlock } from "../blocks/carouselBlock";
import { circleImageCardBlock } from "../blocks/circleImageCardBlock";
import { imageTextBlock } from "../blocks/imageTextBlock";
import { linkBlock } from "../blocks/linkBlock";
import { pdfViewerBlock } from "../blocks/pdfViewerBlock";
import { buttonBlock } from "../blocks/buttonBlock";

export const PageCollection: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "md",
  ui: {
    router: ({ document }: any) => `/${document._sys.breadcrumbs.join("/")}`,
    allowedActions: { create: true, delete: true },
  },
  fields: [
    { name: "title", type: "string" },
    {
      name: "blocks",
      type: "object",
      list: true,
      ui: {
        visualSelector: true, // ✅ Enables draggable block UI
        itemProps: (item: { title: any; heading: any }) => ({
          label: item?.title || item?.heading || "Block",
        }),
      },
      templates: [
        titleBlock,
        subtitleBlock,
        paragraphBlock,
        quoteBlock,
        missionBlock,
        accordionBlock,
        buttonCardBlock,
        vanillaCardBlock,
        fourColumnBlock,
        heroBannerBlock,
        imageCardBlock,
        // mediaGridBlock,
        modalImageBlock,
        tableBlock,
        tabViewBlock,
        threeColumnBlock,
        timelineBlock,
        twoColumnBlock,
        videoBannerBlock,
        separatorBlock,
        imageBlock,
        youtubeBlock,
        carouselBlock,
        circleImageCardBlock,
        imageTextBlock,
        linkBlock,
        pdfViewerBlock,
        buttonBlock
        // titleBlock,
        // separatorBlock,
        // twoColBlock,
        // quoteBlock,
        // threeColCardsBlock,
        // columnCardsBlock,
      ],
    },
  ],
} as any;
