export const MediaGridBlock = ({
  columns,
  items,
}: {
  columns: number;
  items: { type: 'image' | 'video'; src: string; alt?: string }[];
}) => {
  return (
    <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`}>
      {items.map((item, i) =>
        item.type === 'image' ? (
          <img
            key={i}
            src={item.src}
            alt={item.alt || 'media'}
            className="rounded-lg shadow object-cover w-full"
          />
        ) : (
          <video
            key={i}
            src={item.src}
            controls
            className="rounded-lg shadow w-full object-cover"
          />
        )
      )}
    </div>
  );
};
