import { ArrowRight, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-r from-[#073e55] via-[#07536d] to-[#078db3] px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl text-white">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-200">
            Get in touch
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Need AC or HVAC service in Uttar Pradesh?
          </h2>
          <p className="mt-4 leading-7 text-slate-200">
            Talk to our team about installation, repair, maintenance or a
            complete commercial cooling project.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#quick-booking"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-bold text-white transition hover:bg-sky-400"
          >
            Get a free consultation <ArrowRight size={18} />
          </a>
          <a
            href="tel:+919839171701"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-4 font-bold text-white transition hover:bg-white/10"
          >
            <Phone size={18} /> Call us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
