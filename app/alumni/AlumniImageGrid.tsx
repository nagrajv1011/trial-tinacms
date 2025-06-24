"use client";

import Link from "next/link";
import React from "react";

type Props = {
    images: { name: string; url: string; slug: string }[];
    columns?: number;
};

export default function AlumniImageGrid({ images = [], columns = 2 }: Props) {
    return (
        <div
            className={`grid gap-4 ${columns === 1
                ? "grid-cols-1"
                : columns === 2
                    ? "grid-cols-2"
                    : columns === 3
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        : "grid-cols-2"
                }`}
        >
            {images.map((img: any, idx: number) => {
                const slug = img.name.toLowerCase().replace(/\s+/g, '-')
                return (
                    <Link key={idx} href={`/alumni/${slug}`}>
                        <div className="cursor-pointer text-center hover:shadow-lg transition p-2 rounded-xl">
                            <img
                                src={img.url}
                                alt={img.name}
                                className="w-full h-48 object-cover rounded-xl shadow"
                            />
                            <p className="mt-2 font-medium">{img.name}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}
