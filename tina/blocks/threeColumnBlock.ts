import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { circleImageCardBlock } from "./circleImageCardBlock";
import { galleryGridBlock } from "./galleryGridBlock";
import { imageBlock } from "./imageBlock";
import { imageCardBlock } from "./imageCardBlock";
import { imageTextBlock } from "./imageTextBlock";
import { paragraphBlock } from "./paragraphBlock";
import { youtubeBlock } from "./youtubeBlock";

export const threeColumnBlock = {
  name: "three_column",
  label: "Three Column Layout",
  fields: [
    {
      name: "threeColumnLayoutColumns",
      type: "object",
      list: true,
      templates: [
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
};
