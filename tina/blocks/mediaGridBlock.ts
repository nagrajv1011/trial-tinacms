export const mediaGridBlock = {
  name: "media_grid",
  label: "Media Grid",
  fields: [
    { name: "columns", type: "number" },
    {
      name: "items",
      type: "object",
      list: true,
      fields: [
        { name: "type", type: "string", options: ["image", "video"] },
        { name: "src", type: "string" },
        { name: "alt", type: "string" },
      ],
    },
  ],
};
