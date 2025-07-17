export const pdfViewerBlock = {
  name: "pdf_viewer",
  label: "PDF Viewer",
  fields: [
    {
      name: "pdfFile",
      label: "PDF File",
      type: "image", // assuming you're uploading PDFs to the same media system
    },
  ],
  ui: {
    itemProps: (item: any) => ({
      label: item?.title || "PDF Viewer",
    }),
  },
};
