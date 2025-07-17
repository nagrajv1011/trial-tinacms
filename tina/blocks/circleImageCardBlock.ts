export const circleImageCardBlock = {
  name: "circle_image_card",
  label: "Circle Image Card",
  fields: [
    {
      name: "blockLabel",
      label: "Block Name",
      type: "string",
    },
    {
      name: "title",
      label: "Title",
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
  ],
  ui: {
    itemProps: (item: any) => ({
      label: item?.blockLabel || item?.title || "Circle Card",
    }),
  },
};
