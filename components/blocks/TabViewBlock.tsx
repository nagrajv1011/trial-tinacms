'use client';

import { blockComponents } from '@/helpers/const';
import { useState } from 'react';

export const TabViewBlock = ({ tabs }: { tabs: { label: string; content: any[] }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`py-2 px-4 border-b-2 ${
              activeTab === i ? 'border-blue-600 text-blue-600' : 'border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab]?.content?.map((block: any, i: number) => {
          // console.log(block,"Tabview");
          
          const Component = blockComponents[block.__typename];

          return Component ? <Component key={i} {...block} /> : null;
        })}
      </div>
    </div>
  );
};
