import { Collection } from "tinacms";

export const alumniCollection: Collection = {
  name: "alumni",
  label: "Alumni",
  path: "content/alumni", // adjust path as needed
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "sectionTitle",
      label: "Section Title",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
    },
    {
      type: "object",
      name: "images",
      label: "Alumni Images",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name,
        }),
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name (used in route)",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "image",
          name: "url",
          label: "Image",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "alumniName",
      label: "Alumni Name",
    },
    {
      type: "string",
      name: "statementTitle",
      label: "Statement Title",
    },
    {
      type: "rich-text",
      name: "statementContent",
      label: "Statement Content",
    },
    {
      type: "string",
      name: "portalTitle",
      label: "Portal Title",
    },
    {
      type: "rich-text",
      name: "portalContent",
      label: "Portal Content",
    },
    {
      type: "string",
      name: "buttonUrl",
      label: "Button URL",
    },
  ],
};
