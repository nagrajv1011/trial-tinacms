import { TinaMarkdown } from "tinacms/dist/rich-text";

export const ParagraphBlock = ({ content }: { content: any }) => (
  <div className="prose">
    <TinaMarkdown content={content} />
  </div>
);
