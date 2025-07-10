import { Template } from "tinacms";

export const separatorBlock: Template = {
  name: "separator",
  label: "Separator",
  fields: [
    {
      name: "style",
      label: "Style",
      type: "string",
      required: false,
      ui: {
        component: "hidden",
      },
    },
  ],
};
