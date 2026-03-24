import Image from "next/image";

const images = [
  { src: "/flag.JPG", alt: "Flag" },
  { src: "/acro.JPG", alt: "Acro" },
  { src: "/handstand.JPG", alt: "Handstand" },
];

export default function ImageGrid() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-dark-green mb-12 text-center">
          Control Your Body
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative overflow-hidden aspect-[3/4] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
