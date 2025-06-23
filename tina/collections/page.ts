import type { Collection } from "tinacms";

export const PageCollection: Collection = {
    name: "post",
    label: "Posts",
    path: "content/posts",
    ui: {
        router: () => "/",
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
};