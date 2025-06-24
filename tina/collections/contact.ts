import type { Collection } from "tinacms";

export const ContactUsCollection: Collection = {
  label: "Contact Us",
  name: "contact",
  path: "content/contact",
  format: "md",
  ui: {
    router: ({}) => `/contact`, // optional routing
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
      ui: {
        itemProps: (item) => ({
          label: item?.name,
        }),
      },
      fields: [
        { type: "string", name: "name", label: "Department Name" },
        { type: "string", name: "emails", label: "Email", list: true },
      ],
    },
    {
      type: "string",
      name: "faqtitle",
      label: "FAQ Title",
    },
    {
      type: "object",
      name: "items",
      label: "FAQ Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.category,
        }),
      },
      fields: [
        {
          type: "string",
          name: "category",
          label: "Category Name",
        },
        {
          type: "object",
          name: "questions",
          label: "Questions",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.question,
            }),
          },
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
            },
            {
              type: "string",
              name: "answer",
              label: "Answer",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ],
};
