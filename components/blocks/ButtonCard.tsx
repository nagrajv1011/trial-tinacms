import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const ButtonCard = ({
  title,
  body,
  buttonText,
  buttonLink,
}: {
  title: string;
  body: any;
  buttonText: string;
  buttonLink: string;
}) => (
  <div className="p-6 border rounded-lg shadow bg-white text-center">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="prose mb-4"><TinaMarkdown content={body} /></div>
    <a
      href={buttonLink}
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
    >
      {buttonText}
    </a>
  </div>
);
