export const galleryGridBlock = {
  name: "gallery_grid",
  label: "Gallery Grid",
  type: "object",
  ui: {
    // Optional: Custom label for the block (shown in block chooser, etc.)
    defaultItem: {
      items: [],
    },
  },
  fields: [
    {
      name: "items",
      label: "Cards",
      type: "object",
      list: true,
      ui: { itemProps: (item: { title: any }) => ({ label: item?.title }) },
      fields: [
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
          name: "slug",
          label: "Slug (used in URL path)",
          type: "string",
        },
      ],
    },
  ],
};
