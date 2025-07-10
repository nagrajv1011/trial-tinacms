import { TinaMarkdown } from "tinacms/dist/rich-text";

export const MissionBlock = ({ heading, content }: { heading: string; content: any }) => (
  <section className="bg-gray-50 py-10 px-4 text-center">
    <h3 className="text-3xl font-bold text-blue-700 mb-4">{heading}</h3>
    <div className="prose max-w-2xl mx-auto text-gray-700">
      <TinaMarkdown content={content} />
    </div>
  </section>
);
