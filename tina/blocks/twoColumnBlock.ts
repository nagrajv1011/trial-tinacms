import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { imageCardBlock } from "./imageCardBlock";
import { paragraphBlock } from "./paragraphBlock";

export const twoColumnBlock = {
  name: "two_column",
  label: "Two Column Layout",
  fields: [
    {
      name: "twoColumnLayoutColumns",
      type: "object",
      list: true,
      templates: [
        vanillaCardBlock,
        buttonCardBlock,
        imageCardBlock,
        paragraphBlock,
      ],
    },
  ],
} as any;
