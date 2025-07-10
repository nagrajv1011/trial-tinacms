export const carouselBlock = {
  name: "image_carousel",
  label: "Image Carousel",
  type: "object",
  ui: {
    defaultItem: {
      images: [],
    },
    itemProps: () => ({
      label: "Image Carousel",
    }),
  },
  fields: [
    {
      name: "images",
      label: "Carousel Images",
      type: "object",
      list: true,
      ui: {
        itemProps: (item: any) => ({
          label: item?.alt || item?.src?.split("/").pop() || "Image",
        }),
      },
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
