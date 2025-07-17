import React from "react";

export const LinkBlock = ({
  label,
  url,
  openInNewTab,
}: {
  label: string;
  url: string;
  openInNewTab?: boolean;
}) => {
  if (!label || !url) return null;

  return (
    <div className="my-4 flex justify-center">
      <a
        href={url}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noopener noreferrer" : ""}
        className="text-blue-600 underline hover:text-blue-800 text-center"
      >
        {url}
      </a>
    </div>
  );
};
