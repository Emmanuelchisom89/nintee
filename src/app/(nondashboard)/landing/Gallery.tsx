import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="text-center max-w-6xl md:max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold leading-tight text-gray-800">
        Image Gallery
      </h2>
      <p className="mt-4 mb-7 text-semi-lg text-gray-600">
        Browse our handpicked selection of rental properties and find the
        perfect home for you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image
              src="/gallery2.jpg"
              alt="Gallery 2"
              className="object-cover"
              fill
            />
          </div>
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image
              src="/gallery8.jpg"
              alt="Gallery 8"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[160px] rounded-md overflow-hidden">
            <Image
              src="/gallery3.jpg"
              alt="Gallery 3"
              className="object-cover"
              fill
            />
          </div>
          <div className="relative w-full h-[160px] rounded-md overflow-hidden">
            <Image
              src="/gallery6.jpg"
              alt="Gallery 6"
              className="object-cover"
              fill
            />
          </div>
          <div className="relative w-full h-[370px] rounded-md overflow-hidden">
            <Image
              src="/gallery5.jpg"
              alt="Gallery 5"
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image
              src="/gallery1.jpg"
              alt="Gallery 1"
              className="object-cover"
              fill
            />
          </div>
          <div className="relative w-full h-[300px] rounded-md overflow-hidden">
            <Image
              src="/gallery4.jpg"
              alt="Gallery 4"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

/* "use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Parallax Component
const GalleryImage = ({
  src,
  alt,
  animation,
}: {
  src: string;
  alt: string;
  animation: any;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 10; // tilt range
    const y = ((e.clientY - top) / height - 0.5) * 10;
    setRotate({ x: y, y: -x });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-full rounded-lg overflow-hidden shadow-md transition-all"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.2s ease",
      }}
    >
      <Image src={src} alt={alt} className="object-cover" fill />
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4">
        <div className="h-[300px]">
          <GalleryImage
            src="/gallery8.jpg"
            alt="Gallery 1"
            animation={fadeLeft}
          />
        </div>
        <div className="h-[300px]">
          <GalleryImage
            src="/gallery2.jpg"
            alt="Gallery 2"
            animation={fadeLeft}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-[200px]">
          <GalleryImage
            src="/gallery3.jpg"
            alt="Gallery 3"
            animation={zoomIn}
          />
        </div>
        <div className="h-[200px]">
          <GalleryImage
            src="/gallery6.jpg"
            alt="Gallery 6"
            animation={zoomIn}
          />
        </div>
        <div className="h-[300px]">
          <GalleryImage
            src="/gallery5.jpg"
            alt="Gallery 5"
            animation={zoomIn}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-[300px]">
          <GalleryImage
            src="/gallery1.jpg"
            alt="Gallery 1 Duplicate"
            animation={fadeRight}
          />
        </div>
        <div className="h-[350px]">
          <GalleryImage
            src="/gallery4.jpg"
            alt="Gallery 2 Duplicate"
            animation={fadeRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
 */
