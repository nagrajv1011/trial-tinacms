export const subtitleBlock = {
  name: "subtitle_block",
  label: "Subtitle",
  ui: { itemProps: (item: { text: any }) => ({ label: item?.text + `SubTitle` }) },
  fields: [
    {
      name: "text",
      label: "Subtitle Text",
      type: "string",
    },
  ],
};
