import { blockComponents } from "@/helpers/const";

export const TwoColumnLayout = ({ twoColumnLayoutColumns }: { twoColumnLayoutColumns: any[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {twoColumnLayoutColumns && twoColumnLayoutColumns?.map((col, i) => {
      const Component = blockComponents[col.__typename];
      return Component ? <Component key={i} {...col} /> : null;
    })}
  </div>
);
