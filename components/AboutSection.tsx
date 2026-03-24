import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Lauren"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-dark-green mb-8">
            TRAIN WITH LAUREN
          </h2>
          <p className="text-muted-green text-lg md:text-xl leading-relaxed max-w-2xl">
            Lauren is a high-performance movement and strength coach dedicated to unlocking the true potential of the human body. With a focus on functional mastery, she helps clients bridge the gap between simple weightlifting and bodyweight skills. Her philosophy is built on the pillars of movement quality and sustainable progress.
          </p>
        </div>
      </div>
    </section>
  );
}
