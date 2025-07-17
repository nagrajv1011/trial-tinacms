import Link from "next/link";

export const ImageCard = ({
  title,
  image,
  alt,
  slug
}: {
  title: string;
  image: string;
  alt: string;
  slug: any
}) => (
  <Link
    // key={idx}
    href={slug || ""}
    className="text-center group"
  >
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-sm overflow-hidden border rounded-lg shadow bg-white">
        <img
          src={image}
          alt={alt}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-center text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </Link>
);
