import Link from 'next/link';
import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const ButtonCard = ({
  title,
  body,
  buttonText,
  buttonLink,
  image,
}: {
  title?: string;
  body?: any;
  buttonText: string;
  buttonLink: string;
  image?: string;
}) => (
  <div className="relative rounded-lg shadow overflow-hidden">
    {/* Responsive background image */}
    {image && (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title || ""}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0" />
      </div>
    )}

    {/* Card content */}
    <div className="relative z-10 p-6 md:p-8 text-center">
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title || ""}</h3>
      <div className="prose max-w-none mb-4">
        <TinaMarkdown content={body || ""} />
      </div>
      {buttonText && <Link
        href={buttonLink || ""}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        {buttonText}
      </Link>}
    </div>
  </div>
);
