export default function ImageGrid() {
  const images = [
    { alt: "Training image 1", src: null },
    { alt: "Training image 2", src: null },
    { alt: "Training image 3", src: null },
  ];

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-muted-green mb-12 text-center">
          UNLOCKING POTENTIAL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-[#D6D0C8] aspect-[3/4] group"
            >
              {image.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-[#A8A49D] text-xs uppercase tracking-widest">
                    Image {i + 1}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
