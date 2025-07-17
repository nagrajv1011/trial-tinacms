'use client';

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
    <div className="relative max-w-6xl mx-auto px-4 py-12">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0" />

      <div className="relative z-10 space-y-24">
        {events.map((event, index) => {
          const isRight = index % 2 === 0;

          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-9 items-start">
              {/* Left side */}
              <div className={`md:col-span-4 ${isRight ? 'hidden md:block' : ''}`}>
                {!isRight && (
                  <div className="flex flex-col items-end pr-4">
                    <p className="text-base font-bold text-gray-800 mb-2">{event.date}</p>
                    <div className="relative bg-white p-4 rounded-lg shadow-md max-w-md w-full border-r-4 border-blue-800">
                      {/* Left arrow */}
                      <div className="absolute -right-3 top-6 w-0 h-0 border-t-8 border-b-8 border-l-[10px] border-l-blue-800 border-t-transparent border-b-transparent" />
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="mb-4 rounded-lg w-full"
                        />
                      )}
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <div className="text-sm prose dark:prose-invert">
                        <TinaMarkdown content={event.description} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Center dot */}
              <div className="md:col-span-1 flex justify-center relative z-10">
                <div className="w-8 h-8 bg-blue-800 border-4 border-white rounded-full mt-12" />
              </div>

              {/* Right side */}
              <div className={`md:col-span-4 ${isRight ? '' : 'hidden md:block'}`}>
                {isRight && (
                  <div className="flex flex-col items-start pl-4">
                    <p className="text-base font-bold text-gray-800 mb-2">{event.date}</p>
                    <div className="relative bg-white p-4 rounded-lg shadow-md max-w-md w-full border-l-4 border-blue-800">
                      {/* Right arrow */}
                      <div className="absolute -left-3 top-6 w-0 h-0 border-t-8 border-b-8 border-r-[10px] border-blue-800 border-t-transparent border-b-transparent" />
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="mb-4 rounded-lg w-full"
                        />
                      )}
                      <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                      <div className="text-sm prose dark:prose-invert">
                        <TinaMarkdown content={event.description} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile view */}
              <div className="md:hidden mt-8">
                <p className="text-base font-semibold text-gray-800 mb-2">{event.date}</p>
                <div className="flex justify-center mb-4">
                  <div className="w-3 h-3 bg-blue-600 border-4 border-white rounded-full" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="mb-4 rounded-lg w-full"
                    />
                  )}
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <div className="text-sm prose dark:prose-invert">
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
