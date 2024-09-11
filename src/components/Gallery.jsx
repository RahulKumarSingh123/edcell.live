import React from "react";

const images = [
  "/src/assets/images/gallery/p1.JPG",
  "/src/assets/images/gallery/p23.JPG",
  "/src/assets/images/gallery/p17.JPG",
  "/src/assets/images/gallery/p27.JPG",
  "/src/assets/images/gallery/p10.JPG",
  "/src/assets/images/gallery/p7.JPG",
  "/src/assets/images/gallery/p12.JPG",
  "/src/assets/images/gallery/p11.JPG",
  "/src/assets/images/gallery/p26.JPG",
  "/src/assets/images/gallery/p15.JPG",
  "/src/assets/images/gallery/p16.JPG",
  "/src/assets/images/gallery/p3.JPG",
  "/src/assets/images/gallery/p9.JPG",
  "/src/assets/images/gallery/p2.JPG",
  "/src/assets/images/gallery/p29.JPG",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <h1 className="text-white text-center gallery sm:text-5xl text-5xl md:text-5xl lg:text-8xl xl:text-8xl mb-6">
        Gallery
      </h1>

      <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg ${
              index % 5 === 0
                ? "md:col-span-2 md:row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
