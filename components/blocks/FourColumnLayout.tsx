import { blockComponents } from "@/helpers/const";

export const FourColumnLayout = ({ fourColumnLayoutColumns }: { fourColumnLayoutColumns: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {fourColumnLayoutColumns && fourColumnLayoutColumns?.map((col, i) => {
      const Component = blockComponents[col.__typename];
      return Component ? <Component key={i} {...col} /> : null;
    })}
  </div>
);
