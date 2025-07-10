export const tableBlock = {
  name: "table_block",
  label: "Table Block",
  fields: [
    {
      name: "tableColumns",
      label: "Column Headers",
      type: "string",
      list: true,
    },
    {
      name: "rows",
      label: "Rows",
      type: "object",
      list: true,
      ui: {
        itemProps: (item: any) => {
          const firstCell = item?.cells?.[0];
          const label =
            firstCell?.text ||
            firstCell?.body?.children?.[0]?.children?.[0]?.text ||
            "Row";
          return { label };
        },
      },
      fields: [
        {
          name: "cells",
          label: "Cells",
          type: "object",
          list: true,
          templates: [
            {
              name: "text_cell",
              label: "Text Cell",
              fields: [
                {
                  name: "text",
                  type: "string",
                  label: "Text",
                },
              ],
            },
            {
              name: "rich_text_cell",
              label: "Rich Text Cell",
              fields: [
                {
                  name: "body",
                  type: "rich-text",
                  label: "Content",
                },
              ],
            },
          ],
          ui: {
            itemProps: (item: any) => {
              const label =
                item?.text ||
                item?.body?.children?.[0]?.children?.[0]?.text ||
                "Cell";
              return { label };
            },
          },
        },
      ],
    },
  ],
};
