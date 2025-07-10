export const imageCardBlock = {
  name: "image_card",
  label: "Image Card",
  ui: { itemProps: (item: { title: any }) => ({ label: item?.title }) },
  fields: [
    { name: "title", type: "string" },
    { name: "image", type: "image" },
    { name: "alt", type: "string" },
  ],
};
