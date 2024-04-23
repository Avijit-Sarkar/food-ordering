"use client";
import Right from "@/components/icons/Right";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/pizza.png", "/pizza-2.png", "/cheese-stick.webp"]; // Add more image paths as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Explore
          <br />a <span className="text-primary italic">world</span> of
          <br />
          flavors <span className="text-primary">Order Now</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Discover a symphony of tastes from around the globe, each dish crafted
          with care and authenticity.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            layout="fill"
            objectFit="contain"
            alt={`slide-${index}`}
            className={index === currentImageIndex ? "block" : "hidden"}
          />
        ))}
      </div>
    </section>
  );
}
