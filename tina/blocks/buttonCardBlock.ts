export const buttonCardBlock = {
  name: "button_card",
  label: "Card with Button",
  ui: { labelField: "title" },
  fields: [
    { name: "title", type: "string" },
    { name: "body", type: "rich-text" },
    { name: "buttonText", type: "string" },
    { name: "buttonLink", type: "string" },
  ],
};
