export const missionBlock = {
  name: "mission_block",
  label: "Mission / Vision / Motto",
  ui: { labelField: "heading" },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "string",
    },
    {
      name: "content",
      label: "Content",
      type: "rich-text",
    },
  ],
};
