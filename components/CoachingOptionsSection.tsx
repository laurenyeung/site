const options = [
  {
    title: "FULL ONLINE PROGRAMMING",
    body: "Unlock your potential from anywhere. Custom strength and mobility plans with weekly feedback and progress tracking",
  },
  {
    title: "1-ON-1 IN-PERSON TRAINING",
    body: "High-performance coaching tailored to your specific biomechanics and goals. Focus on technical skill acquisition and absolute strength",
  },
  {
    title: "HYBRID STRENGTH COACHING",
    body: "The best of both worlds. Monthly in-person check-ins combined with a rigorous digital program and video analysis",
  },
];

export default function CoachingOptionsSection() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-green/20">
          {options.map((option, i) => (
            <div
              key={i}
              className="bg-beige p-10 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(47,62,44,0.12)] group"
            >
              <h3 className="text-base font-black uppercase tracking-widest text-dark-green mb-6 leading-snug">
                {option.title}
              </h3>
              <p className="text-muted-green leading-relaxed text-sm md:text-base">
                {option.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
