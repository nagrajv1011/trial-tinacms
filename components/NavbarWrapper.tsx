// components/NavbarWrapper.tsx
"use client";

import { useTina } from "tinacms/dist/react";
import { navbarQuery } from "@/tina/queries/navbarQuery";
import Navbar from "./Navbar";

const NavbarWrapper = (props: any) => {
  const { data } = useTina({
    query: navbarQuery,
    variables: {
      relativePath: "navbar.md",
    },
    data: props.data,
  });

  return <Navbar data={data} />;
};

export default NavbarWrapper;
