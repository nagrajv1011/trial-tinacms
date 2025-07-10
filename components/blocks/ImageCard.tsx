export const ImageCard = ({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) => (
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
);
