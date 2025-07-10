import { buttonCardBlock } from "./buttonCardBlock";
import { vanillaCardBlock } from "./cardBlock";
import { imageCardBlock } from "./imageCardBlock";
import { threeColumnBlock } from "./threeColumnBlock";
import { twoColumnBlock } from "./twoColumnBlock";

export const tabViewBlock = {
  name: "tab_view",
  label: "Tab View",
  ui: {
    itemProps: (item: { label?: string }) => ({
      label: item?.label || "Tab",
    }),
  },
  fields: [
    {
      name: "tabs",
      type: "object",
      list: true,
      ui: {
        itemProps: (item: { label?: string }) => ({
          label: item?.label || "Tab",
        }),
      },
      fields: [
        { name: "label", type: "string" },
        {
          name: "content",
          type: "object",
          list: true,
          templates: [
            vanillaCardBlock,
            buttonCardBlock,
            imageCardBlock,
            twoColumnBlock,
            threeColumnBlock,
          ],
        },
      ],
    },
  ],
};
