import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Experienced team",
    description:
      "Practical HVAC expertise for homes, businesses and demanding projects.",
    icon: BadgeCheck,
  },
  {
    title: "Solutions that fit",
    description:
      "Thoughtful recommendations based on your space, needs and budget.",
    icon: Sparkles,
  },
  {
    title: "Quality assured",
    description:
      "Careful installation and service, with clear communication throughout.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive support",
    description:
      "Talk directly to our team for service, maintenance and expert guidance.",
    icon: Clock3,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Why choose us
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            The LIMRA difference
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Dependable service, knowledgeable guidance and a genuine
            commitment to doing the job right.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Icon size={25} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
