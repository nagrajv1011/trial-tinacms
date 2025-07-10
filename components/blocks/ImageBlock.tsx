import Image from "next/image";

export const ImageBlock = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  return (
    <figure className="w-full text-center my-6">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image src={src} alt={alt} fill className="object-contain rounded-md" />
      </div>
      {caption && <figcaption className="text-sm text-gray-500 mt-2">{caption}</figcaption>}
    </figure>
  );
};
