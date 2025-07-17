import React from "react";

export const PdfViewerBlock = ({
//   title,
  pdfFile,
}: {
//   title: string;
  pdfFile: string;
}) => {
  if (!pdfFile) return null;

  return (
    <div className="my-8">
      {/* {title && <h2 className="text-xl font-bold mb-4">{title}</h2>} */}

      <div className="relative w-full" style={{ paddingTop: "141.42%" }}>
        <iframe
          src={pdfFile}
        //   title={title}
          className="absolute top-0 left-0 w-full h-full border rounded shadow"
        />
      </div>
    </div>
  );
};
