import { blockComponents } from "@/helpers/const";

export const ThreeColumnLayout = ({ threeColumnLayoutColumns }: { threeColumnLayoutColumns: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {threeColumnLayoutColumns?.map((col, i) => {
      const Component = blockComponents[col.__typename];
      return Component ? <Component key={i} {...col} /> : null;
    })}
  </div>
);

