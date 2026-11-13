"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImage = { url: string; altText: string | null };

export default function ProductGallery({ title, images }: { title: string; images: ProductImage[] }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    return <div className="aspect-[3/4] rounded-2xl bg-[#f9f3e8]" />;
  }

  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f9f3e8] border border-[#254c38]/15 shadow-sm">
        <Image
          src={images[activeImage].url}
          alt={images[activeImage].altText ?? title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1" aria-label={`${title} photos`}>
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              aria-pressed={activeImage === index}
              className={`relative h-16 w-14 shrink-0 overflow-hidden rounded-md border-2 ${activeImage === index ? "border-primary" : "border-transparent"}`}
            >
              <Image src={image.url} alt="" fill unoptimized sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
