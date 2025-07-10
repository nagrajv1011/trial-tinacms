export const timelineBlock = {
  name: "timeline",
  label: "Timeline",
  fields: [
    {
      name: "events",
      type: "object",
      list: true,
      fields: [
        { name: "date", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "rich-text" },
         { name: "image", type: "image", label: "Image", required: false },
      ],
    },
  ],
};
