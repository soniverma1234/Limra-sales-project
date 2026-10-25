import {
  Building2,
  ChevronRight,
  Factory,
  HeartPulse,
  Hotel,
  School,
  Store,
  Trees,
  Wind,
} from "lucide-react";

const industries = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Hotels & hospitality", icon: Hotel },
  { label: "Commercial offices", icon: Building2 },
  { label: "Retail & malls", icon: Store },
  { label: "Industrial facilities", icon: Factory },
  { label: "Educational institutions", icon: School },
  { label: "Data centers", icon: Wind },
  { label: "Warehouses & cold storage", icon: Trees },
];

const IndustriesSection = () => {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Industries we serve
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Commercial HVAC applications
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Reliable climate control for the spaces where people work, learn,
            heal and do business.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#contact"
              className="group flex min-h-32 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-200 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition group-hover:bg-sky-700 group-hover:text-white">
                <Icon size={24} />
              </span>
              <span className="font-semibold leading-6 text-slate-800">
                {label}
              </span>
              <ChevronRight
                size={18}
                className="ml-auto shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-700"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
