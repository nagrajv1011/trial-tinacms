import { HomepageBannerCarousel } from "@/components/HomepageBannerCarousel";
import HomeWrapper from "@/components/HomeWrapper";
import client from "@/tina/__generated__/client";
import Image from "next/image";

type Props = {
  data: any;
};

export default async function Home() {

  const { data, query, variables } = await client.queries.page({ relativePath: "home.md" });
  // return (
  //   <>
  //     <div className="flex justify-center justify-items-center p-2">
  //       <HomepageBannerCarousel />
  //     </div>
  //   </>
  // );
  return <HomeWrapper data={data} query={query} variables={variables} />;
}
