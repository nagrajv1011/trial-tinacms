// components/HomeWrapper.tsx
"use client";

import Home from "@/app/page";
import { blockComponents } from "@/helpers/const";
import { useTina } from "tinacms/dist/react";


const HomeWrapper = (props: any) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const pageData = data.page;

  if (!pageData) return <p className="text-center">Loading...</p>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {pageData?.blocks?.map((block: any, i: number) => {
        // console.log(block, "HomePageWrapper.tsx");
        const Component = blockComponents[block.__typename];
        return Component ? <Component key={i} {...block} /> : null;
      })}
    </main>
  );
};

export default HomeWrapper;
