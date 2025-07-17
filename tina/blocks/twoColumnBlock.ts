import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { circleImageCardBlock } from "./circleImageCardBlock";
import { galleryGridBlock } from "./galleryGridBlock";
import { imageBlock } from "./imageBlock";
import { imageCardBlock } from "./imageCardBlock";
import { imageTextBlock } from "./imageTextBlock";
import { paragraphBlock } from "./paragraphBlock";
import { titleBlock } from "./titleBlock";
import { youtubeBlock } from "./youtubeBlock";

export const twoColumnBlock = {
  name: "two_column",
  label: "Two Column Layout",
  fields: [
    {
      name: "twoColumnLayoutColumns",
      type: "object",
      list: true,
      templates: [
        titleBlock,
        vanillaCardBlock,
        buttonCardBlock,
        imageCardBlock,
        paragraphBlock,
        imageBlock,
        youtubeBlock,
        imageTextBlock,
        galleryGridBlock,
        circleImageCardBlock,
      ],
    },
  ],
} as any;
