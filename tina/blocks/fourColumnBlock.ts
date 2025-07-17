import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { circleImageCardBlock } from "./circleImageCardBlock";
import { galleryGridBlock } from "./galleryGridBlock";
import { imageBlock } from "./imageBlock";
import { imageCardBlock } from "./imageCardBlock";
import { imageTextBlock } from "./imageTextBlock";
import { paragraphBlock } from "./paragraphBlock";
import { youtubeBlock } from "./youtubeBlock";

export const fourColumnBlock = {
  name: "four_column",
  label: "Four Column Layout",

  fields: [
    {
      name: "fourColumnLayoutColumns",
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
      ui: {
        itemProps: (item: any) => {
          item?.title || item?.slug;
        },
      },
    },
  ],
};
