export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none mb-8 text-dark-green">
          LOCK IN YOUR STRENGTH
        </h1>
        <p className="text-lg md:text-xl text-muted-green max-w-2xl mx-auto mb-12 leading-relaxed">
          Build real strength, unlock new skills, and move with energy.
          <br className="hidden md:block" />{" "}
          Master your first pull-up, muscle-up, human flag, and deep flexibility.
        </p>
        <a
          href="https://www.instagram.com/lock.in.lauren"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dark-green text-beige uppercase tracking-widest text-sm font-bold px-10 py-4 transition-all duration-200 hover:scale-105 hover:bg-[#1e2a1c]"
        >
          BOOK YOUR FIRST SESSION
        </a>
      </div>
    </section>
  );
}
