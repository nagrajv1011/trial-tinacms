"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import AlumniImageGrid from "./AlumniImageGrid";

type Props = {
    data: any
    query: string
    variables: any
    // images: {
    //     name: string
    //     slug: string
    //     url: string
    // }[]
}

export default function AlumniClient({ data, query, variables }: Props) {
    const { data: tinaData } = useTina({ data, query, variables });

    const alumni = tinaData.alumni;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Title & Subtitle */}
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">{alumni?.title}</h1>
                <p className="text-lg text-gray-600">{alumni?.subtitle}</p>
            </div>

            {/* 2 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Section Title, Content, Button */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{alumni?.sectionTitle}</h2>
                    <div className="prose">
                        <TinaMarkdown content={alumni?.content} />
                    </div>
                    <a
                        href={alumni?.buttonUrl}
                        target="_blank"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Register Now
                    </a>
                </div>

                {/* Right: First 6 Images */}
                {/* <AlumniImageGrid images={alumni?.images?.slice(0, 6)} columns={3} /> */}
                <AlumniImageGrid images={alumni?.images?.slice(0, 6)} columns={3} />
            </div>

            {/* Statement Section */}
            <div className="space-y-2">
                <h3 className="text-xl font-bold">{alumni?.statementTitle}</h3>
                <div className="prose">
                    <TinaMarkdown content={alumni?.statementContent} />
                </div>
            </div>

            {/* Portal Section */}
            <div className="space-y-2">
                <h3 className="text-xl font-bold">{alumni?.portalTitle}</h3>
                <div className="prose">
                    <TinaMarkdown content={alumni?.portalContent} />
                </div>
            </div>

            {/* All Alumni Images */}
            <AlumniImageGrid images={alumni?.images} columns={3} />

            {/* <AlumniImageGrid images={images} columns={3} /> */}
        </div>
    );
}
