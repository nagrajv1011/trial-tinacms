export const buttonCardBlock = {
  name: "button_card",
  label: "Card with Button",
  ui: {
    itemProps: (item: any) => ({
      label: item?.label,
    }),
  },
  fields: [
    { name: "title", type: "string", required: false },
    { name: "body", type: "rich-text", required: false },
    { name: "buttonText", type: "string" },
    { name: "buttonLink", type: "string" },
    {
      name: "image",
      label: "Background Image",
      type: "image",
      required: false,
    },
  ],
};
