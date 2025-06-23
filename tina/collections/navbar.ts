    import type { Collection } from "tinacms";

    export const NavbarCollection: Collection = {
    name: "menu",
    label: "Menu",
    path: "content/menu",
    format: "md",
    ui: {
        router: () => "/",
    },
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
        },
        {
            type: "object",
            name: "logo",
            label: "Logo",
            fields: [
                { type: "image", name: "url", label: "Logo Image" },
                { type: "string", name: "alt", label: "Alt Text" },
            ],
        },
        {
            type: "object",
            list: true,
            name: "links",
            label: "Navigation Links",
            ui: {
                itemProps: (item) => ({
                    label: item?.label,
                }),
            },
            fields: [
                { type: "string", name: "label", label: "Label" },
                { type: "string", name: "url", label: "URL" },
                {
                    type: "object",
                    list: true,
                    name: "subMenu",
                    label: "Sub Links",
                    ui: {
                        itemProps: (item) => ({
                            label: item?.label,
                        }),
                    },
                    fields: [
                        { type: "string", name: "label", label: "Sub-label" },
                        { type: "string", name: "url", label: "Sub-url" },
                    ],
                },
            ],
        },
        {
            type: "boolean",
            name: "showSearch",
            label: "Show Search Icon",
        },
    ],
};
