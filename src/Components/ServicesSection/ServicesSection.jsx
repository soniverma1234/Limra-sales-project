import {
  ArrowRight,
  Check,
  Wrench,
} from "lucide-react";
import residentialImage from "../../assets/limra/residential.jpg";
import commercialImage from "../../assets/limra/commercial.jpg";

const residentialItems = [
  "Split ACs up to 3 ton",
  "Window and portable ACs",
  "Water coolers & dispensers",
  "Air purifiers & water softeners",
];

const commercialItems = [
  "VRF and multi-split systems",
  "Cassette & ductable ACs",
  "Chillers & heat pumps",
  "Ventilation & fresh air systems",
];

const serviceTypes = [
  {
    title: "AC installation",
    description: "Professional setup for new and replacement systems.",
  },
  {
    title: "Repair & servicing",
    description: "Help diagnose performance issues and restore comfort.",
  },
  {
    title: "AMC maintenance",
    description: "Planned maintenance to keep equipment running smoothly.",
  },
  {
    title: "HVAC projects",
    description: "Support for ducting, ventilation, cold rooms and chillers.",
  },
];

const SolutionCard = ({ title, description, items, image, alt }) => (
  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className="h-56 w-full object-cover sm:h-64"
    />
    <div className="p-7">
      <h3 className="font-serif text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
            <Check size={17} className="mt-0.5 shrink-0 text-sky-700" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href="tel:+919839171701"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800"
      >
        Get a quote <ArrowRight size={16} />
      </a>
    </div>
  </article>
);

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Complete HVAC solutions
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            From everyday comfort to complex projects
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our team can help with equipment selection, installation and
            service for residential and commercial spaces.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          <SolutionCard
            title="Residential solutions"
            description="Comfortable, efficient cooling tailored to your home."
            items={residentialItems}
            image={residentialImage}
            alt="Technician installing a residential split air conditioner"
          />
          <SolutionCard
            title="Commercial & VRF systems"
            description="Scalable climate control for businesses and larger buildings."
            items={commercialItems}
            image={commercialImage}
            alt="Commercial VRF HVAC system installed in an office building"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceTypes.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 p-5"
            >
              <Wrench size={22} className="text-sky-700" />
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-center text-sm text-slate-600">
          Need a custom solution for a large project?{" "}
          <a
            href="#contact"
            className="font-bold text-sky-700 hover:text-sky-900"
          >
            Talk to our team
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
