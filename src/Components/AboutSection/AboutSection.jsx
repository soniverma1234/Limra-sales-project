import { ArrowRight, Building2, Snowflake, Wind } from "lucide-react";
import logo from "../../assets/limra/logo.png";

const features = [
  { title: "Home", detail: "cooling", icon: Snowflake },
  { title: "Business", detail: "HVAC", icon: Building2 },
  { title: "Installation", detail: "& repair", icon: Wind },
  { title: "Uttar Pradesh", detail: "service", icon: Building2 },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            LIMRA Sales &amp; Services
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Trusted HVAC &amp; cooling experts in Uttar Pradesh
          </h2>
          <p className="mt-6 leading-8 text-slate-600">
            We provide complete air-conditioning and climate-control solutions
            for residential, commercial and industrial spaces. From split AC
            installation and maintenance to VRF systems, ducting, ventilation,
            cold rooms and chillers, our team helps you plan the right solution
            and keeps it performing reliably.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Based in Hardoi, we serve customers across Uttar Pradesh with
            dependable workmanship, transparent guidance and ongoing support.
          </p>
          <a
            href="#services"
            className="mt-7 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900"
          >
            Explore our solutions <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-[#073e55] to-[#078db3] p-8 text-white sm:p-10">
          <div className="absolute -right-3 -top-3 rounded-2xl bg-white p-3 shadow-lg">
            <img src={logo} alt="" className="w-36" />
          </div>
          <Snowflake size={44} className="mb-8 text-sky-200" />
          <p className="max-w-sm font-serif text-3xl font-bold leading-snug">
            Complete climate solutions, built around you.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {features.map(({ title, detail, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-white/20 bg-white/10 p-4"
              >
                <Icon size={18} className="mb-2 text-sky-200" />
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-sky-100">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
