export const imageBlock = {
  name: "image_block",
  label: "Image Block",
  type: "object",
  ui: {
    defaultItem: {
      alt: "Descriptive alt text",
    },
    itemProps: (item: any) => ({
      label: item?.alt || item?.src?.split("/")?.pop() || "Image",
    }),
  },
  fields: [
    {
      name: "src",
      label: "Image",
      type: "image",
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
    },
    {
      name: "caption",
      label: "Caption (Optional)",
      type: "string",
      required: false,
    },
  ],
};
