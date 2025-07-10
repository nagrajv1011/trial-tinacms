"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export const ImageCarousel = ({ images }: { images: { src: string; alt?: string }[] }) => {
  if (!images?.length) return null;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
