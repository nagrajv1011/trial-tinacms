import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { galleryGridBlock } from "./galleryGridBlock";
import { imageCardBlock } from "./imageCardBlock";

export const threeColumnBlock = {
  name: "three_column",
  label: "Three Column Layout",
  fields: [
    {
      name: "threeColumnLayoutColumns",
      type: "object",
      list: true,
      templates: [vanillaCardBlock, buttonCardBlock, imageCardBlock, galleryGridBlock],
    },
  ],
};
