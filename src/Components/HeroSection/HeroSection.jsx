import Form from "./Form";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#073e55] via-[#07536d] to-[#078db3] px-6 py-14 text-center text-white sm:px-10 lg:min-h-[calc(100vh-68px)] lg:px-16 lg:py-16 lg:text-left"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-20">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Smart AC Sales &amp; Services
            <span className="block">Powered by Technology</span>
          </h1>
          <p className="mt-6 text-base tracking-wide text-slate-300 sm:text-lg lg:text-xl">
            Don&apos;t wait in heat –{" "}
            <span className="font-bold text-sky-400">
              get instant AC service today
            </span>
          </p>
          <p className="mt-5 text-sm text-slate-100 sm:text-base lg:text-lg">
            Real-time booking | Same-day service | Certified technicians
          </p>
          <p className="mt-2 text-sm tracking-wider text-slate-200 sm:text-base lg:text-lg">
            Experience fast, reliable &amp; hassle-free cooling solutions
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#quick-booking"
              className="rounded-xl bg-sky-500 px-7 py-4 text-center font-bold text-white shadow-lg transition hover:bg-sky-400"
            >
              Book Service Instantly
            </a>
            <a
              href="#quick-booking"
              className="rounded-xl border border-white/70 bg-white/10 px-7 py-4 text-center font-bold text-white transition hover:bg-white/20"
            >
              Get Instant Quote
            </a>
          </div>

          <a
            href="tel:+919839171701"
            className="mt-6 inline-block font-semibold transition hover:text-sky-300"
          >
            Talk to Expert Now →
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-slate-100 sm:w-fit lg:justify-start">
            <span>✦ 4.8 Rating</span>
            <span>✦ 10,000+ Services</span>
            <span>✦ 30 Min Response</span>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default HeroSection;