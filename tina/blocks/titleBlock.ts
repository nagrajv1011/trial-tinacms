export const titleBlock = {
  name: "title_block",
  label: "Title",
  ui: { itemProps: (item: { text: any }) => ({ label: item?.text + `Title` }) },
  fields: [
    {
      name: "text",
      label: "Title Text",
      type: "string",
    },
  ],
};
