export const HeroBannerBlock = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div
      className="relative h-[60vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 space-y-4 px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl">{subtitle}</p>
        <a
          href={buttonLink}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded inline-block"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
