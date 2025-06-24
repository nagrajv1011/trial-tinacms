import { Collection } from "tinacms";

export const alumniImagesCollection: Collection = {
  name: "alumniImages",
  label: "Alumni Images",
  path: "content/alumniImages",
  format: "md",
  ui: {
    router: ({ document }) => `/alumni/${document._sys.filename}`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "url",
      label: "Image URL",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
    },
  ],
}
