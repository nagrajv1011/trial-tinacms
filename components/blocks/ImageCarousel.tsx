"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export const ImageCarousel = ({
    images,
}: {
    images: { src: string; alt?: string; link?: string; linkText?: string }[];
}) => {
    if (!images?.length) return null;

    return (
        <Carousel className="w-full">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                            {/* Image */}
                            <Image
                                src={image.src}
                                alt={image.alt || `Slide ${index + 1}`}
                                fill
                                className="object-cover rounded-md"
                            />

                            {/* Overlay (centered text + button if link exists) */}
                            {image.link && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4 rounded-md">
                                    {image.linkText && (
                                        <div className="font-bold text-lg mb-3 text-center">
                                            {image.linkText}
                                        </div>
                                    )}
                                    <Link
                                        href={image.link}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-base"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
