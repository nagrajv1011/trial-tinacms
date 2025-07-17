export const linkBlock = {
  name: "link_block",
  label: "Hyperlink",
  fields: [
    {
      name: "label",
      label: "Link Text",
      type: "string",
    },
    {
      name: "url",
      label: "URL",
      type: "string",
    },
    {
      name: "openInNewTab",
      label: "Open in New Tab?",
      type: "boolean",
    },
  ],
  ui: {
    itemProps: (item: any) => ({
      label: item?.label || "Link",
    }),
  },
};
