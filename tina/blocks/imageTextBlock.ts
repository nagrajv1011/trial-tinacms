export const imageTextBlock = {
  name: "image_text_block",
  label: "Image Left - Text Right",
  fields: [
    {
      name: "blockLabel",
      label: "Block Name (Editor Label)",
      type: "string",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
    },
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "description",
      label: "Description",
      type: "rich-text",
    },
    {
      name: "slug",
      label: "Slug (used in URL path)",
      type: "string",
    },
  ],
  ui: {
    itemProps: (item: { blockLabel: any; title: any }) => ({
      label: item?.blockLabel || item?.title || "Image + Text Block",
    }),
  },
};
