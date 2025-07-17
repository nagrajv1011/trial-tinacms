// blocks/buttonBlock.ts

export const buttonBlock = {
  name: "button_block",
  label: "Button",
  ui: {
    defaultItem: {
      label: "Click Me",
      url: "/",
      variant: "primary",
    },
    itemProps: (item: any) => ({
      label: item?.label || "Button",
    }),
  },
  fields: [
    {
      name: "label",
      label: "Button Label",
      type: "string",
    },
    {
      name: "url",
      label: "Button URL",
      type: "string",
    },
    {
      name: "variant",
      label: "Button Variant",
      type: "string",
      options: ["primary", "secondary", "outline"],
    },
    {
      name: "fullWidth",
      label: "Full Width",
      type: "boolean",
    },
  ],
};
