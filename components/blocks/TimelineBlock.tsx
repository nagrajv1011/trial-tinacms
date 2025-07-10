import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const TimelineBlock = ({
  events,
}: {
  events: {
    date: string;
    title: string;
    description: any;
    image?: string;
  }[];
}) => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

      <div className="relative z-10 space-y-12">
        {events.map((event, i) => {
          const isRight = i % 2 === 0;

          return (
            <div key={i} className="grid md:grid-cols-9 items-center">
              {/* Left Content (date or card depending on side) */}
              <div className={`md:col-span-4 ${isRight ? 'hidden md:block' : ''}`}>
                {!isRight && (
                  <div className="bg-white p-4 rounded-lg shadow-md text-right">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="mb-4 rounded-lg w-full"
                      />
                    )}
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <div className="prose dark:prose-invert text-sm">
                      <TinaMarkdown content={event.description} />
                    </div>
                  </div>
                )}
              </div>

              {/* Center Dot + Date */}
              <div className="md:col-span-1 flex flex-col items-center relative">
                <span className="text-sm font-semibold text-gray-600 mb-2 md:mb-1 whitespace-nowrap">
                  {event.date}
                </span>
                <div className="w-4 h-4 bg-blue-600 border-4 border-white rounded-full z-10" />
              </div>

              {/* Right Content (card or date depending on side) */}
              <div className={`md:col-span-4 ${isRight ? '' : 'hidden md:block'}`}>
                {isRight && (
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="mb-4 rounded-lg w-full"
                      />
                    )}
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <div className="prose dark:prose-invert text-sm">
                      <TinaMarkdown content={event.description} />
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile View (stacked) */}
              <div className="md:hidden mt-4 col-span-full">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="mb-4 rounded-lg w-full"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="prose dark:prose-invert text-sm">
                    <TinaMarkdown content={event.description} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
