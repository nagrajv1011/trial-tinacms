import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { galleryGridBlock } from "./galleryGridBlock";
import { imageCardBlock } from "./imageCardBlock";

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
        galleryGridBlock,
      ],
      ui: {
        itemProps: (item: any) => {
          item?.title || item?.slug;
        },
      },
    },
  ],
};
