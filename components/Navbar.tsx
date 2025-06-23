"use client";

import Image from "next/image";
// import { PageQuery } from "../tina/__generated__/types";
import React, { useState } from 'react'
import { useTina } from 'tinacms/dist/react';
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { navbarQuery } from "@/tina/queries/navbarQuery";


type Props = {
    data: any;
    variables: object;
    query: string;
}

const Navbar = (props: Props) => {

    const { data } = useTina({
        query: navbarQuery,
        variables: {
            relativePath: 'navbar.md',
        },
        data: props.data,
    });

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

    const toggleSubmenu = (index: number) => {
        setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    };

    // console.log(data, "navbar.tsx");


    return (
        <header className="border-b border-b-black bg-white">
            <div className="flex justify-around items-center px-4 py-3 md:px-10">
                {/* Logo */}
                <Link href="/">
                    <Image src={data?.logo?.url} alt={data?.logo?.alt} width={50} height={50} />
                </Link>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu />
                </button>

                {/* Search Icon */}
                {/* {data?.showSearch && (
                    <div className="hidden md:block cursor-pointer">
                        <Image src="/search-icon.svg" alt="Search" width={20} height={20} />
                    </div>
                )} */}

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {data?.links?.map((link: any, i: any) => (
                        <div key={i} className="relative group">
                            {link.url ? (
                                <Link href={link.url} className="hover:underline">
                                    {link.label}
                                </Link>
                            ) : (
                                <div className="cursor-pointer hover:underline flex items-center gap-1">
                                    {link.label} <ChevronDown size={16} />
                                </div>
                            )}
                            {link.subMenu && (
                                <div className="absolute left-0 top-full mt-1 hidden group-hover:flex flex-col bg-white border shadow p-2 z-10">
                                    {link.subMenu.map((sub: any, j: any) => (
                                        <Link key={j} href={sub.url} className="hover:bg-gray-100 px-3 py-1">
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <nav className="flex flex-col md:hidden px-4 pb-4">
                    {data.links.map((link: any, i: any) => (
                        <div key={i} className="py-2">
                            {link.url ? (
                                <Link href={link.url} className="block py-1">
                                    {link.label}
                                </Link>
                            ) : (
                                <div>
                                    <button
                                        onClick={() => toggleSubmenu(i)}
                                        className="w-full text-left py-1 flex items-center"
                                    >
                                        {link.label} {openSubmenuIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                    {openSubmenuIndex === i && (
                                        <div className="pl-4 mt-1">
                                            {link.subMenu?.map((sub: any, j: any) => (
                                                <Link key={j} href={sub.url} className="block py-1">
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    {data.showSearch && (
                        <div className="pt-2">
                            <Image src="/search-icon.svg" alt="Search" width={20} height={20} />
                        </div>
                    )}
                </nav>
            )}
        </header>
    );
}

export default Navbar