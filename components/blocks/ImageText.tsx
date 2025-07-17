import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";
import Link from "next/link";

export const ImageText = ({
  image,
  alt,
  title,
  description,
  slug
}: {
  image: string;
  alt: string;
  title: string;
  description: any;
  slug?: any
}) => {
  return (
    <Link href={slug || ""} >
      <div className="flex flex-col md:flex-row items-center gap-6 my-8">
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt={alt || "Image"}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto border-2 p-2"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 line-clamp-4">{title}</h2>
          <div className="prose max-w-none line-clamp-4 overflow-hidden">
            <TinaMarkdown content={description} />
          </div>
        </div>
      </div >
    </Link>
  );
};
