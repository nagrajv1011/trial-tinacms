export const VideoBannerBlock = ({
  videoUrl,
  overlayText,
  buttonText,
  buttonLink,
}: {
  videoUrl: string;
  overlayText: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">{overlayText}</h2>
        <a
          href={buttonLink}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
