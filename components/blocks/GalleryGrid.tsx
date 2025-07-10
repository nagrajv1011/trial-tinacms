import Link from "next/link";
import Image from "next/image";
import { Key } from "react";

export const GalleryGrid = ({ items }: any) => {
  return (
    <div>
      {items?.map((item: any, idx: Key) => (
        <Link
          key={idx}
          href={`/gallery/${item.slug}`}
          className="text-center group"
        >
          <div className="shadow-md hover:shadow-xl transition duration-200 rounded-lg overflow-hidden bg-white">
            <div className="aspect-square relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-base md:text-lg font-semibold text-blue-900 group-hover:underline">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
