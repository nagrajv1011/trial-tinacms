import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const VanillaCard = ({ title, body }: { title: string; body: any }) => (
  <div className="p-6 border rounded-lg shadow bg-white">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="prose"><TinaMarkdown content={body} /></div>
  </div>
);
