import { ArrowRight, CalendarDays } from "lucide-react";
import coldRoomImage from "../../assets/limra/blog-cold-room.webp";
import acServiceImage from "../../assets/limra/blog-ac-service.webp";
import vrfImage from "../../assets/limra/blog-vrf.webp";

const articles = [
  {
    title: "Why Industrial Cold Rooms Are Essential for Modern Businesses",
    category: "Refrigeration",
    image: coldRoomImage,
    alt: "Industrial cold room refrigeration equipment",
  },
  {
    title: "Top 7 Signs Your AC Needs Servicing Before Summer",
    category: "AC maintenance",
    image: acServiceImage,
    alt: "Air conditioner service and maintenance",
  },
  {
    title: "VRV vs VRF Systems: Which Cooling Solution Is Right for Your Building?",
    category: "Commercial HVAC",
    image: vrfImage,
    alt: "Commercial VRV and VRF HVAC equipment",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              From the LIMRA blog
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Helpful advice for staying cool
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900"
          >
            Talk to an expert <ArrowRight size={17} />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ title, category, image, alt }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={image}
                alt={alt}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
                  <CalendarDays size={15} />
                  {category}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-slate-900">
                  {title}
                </h3>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900"
                >
                  Read more <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
