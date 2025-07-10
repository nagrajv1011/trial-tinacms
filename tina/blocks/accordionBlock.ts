export const accordionBlock = {
  name: "accordion",
  label: "Accordion",
  fields: [
    {
      name: "items",
      type: "object",
      list: true,
      fields: [
        { name: "title", type: "string" },
        {
          name: "content",
          type: "object",
          templates: [
            {
              name: "text",
              label: "Rich Text",
              fields: [{ name: "body", type: "rich-text" }],
            },
            {
              name: "nested_accordion",
              label: "Nested Accordion",
              fields: [
                {
                  name: "items",
                  type: "object",
                  list: true,
                  fields: [
                    { name: "title", type: "string" },
                    { name: "content", type: "rich-text" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
