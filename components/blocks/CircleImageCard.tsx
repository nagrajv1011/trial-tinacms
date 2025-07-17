export const CircleImageCard = ({
    title,
    image,
    alt,
}: {
    title: string;
    image: string;
    alt: string;
}) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
            <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
    </div>
);
