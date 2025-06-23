import type { Collection } from "tinacms";

export const ContactUsCollection: Collection = {
  label: "Contact Us",
  name: "page",
  path: "content/pages",
  format: "md",
  ui: {
    router: ({ }) => `/contact`, // optional routing
  },
  fields: [
    { type: "string", name: "title", label: "Page Title" },
    { type: "string", name: "sectionTitle", label: "Section Title" },
    { type: "string", name: "mapUrl", label: "Google Map Embed URL" },
    {
      type: "object",
      name: "departments",
      label: "Departments",
      list: true,
      fields: [
        { type: "string", name: "name", label: "Department Name" },
        { type: "string", name: "email", label: "Email" },
      ],
    },
  ],
}
