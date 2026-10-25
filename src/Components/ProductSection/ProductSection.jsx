import { ArrowRight } from "lucide-react";
import splitAcImage from "../../assets/limra/split-ac.png";
import windowAcImage from "../../assets/limra/window-ac.png";
import cassetteAcImage from "../../assets/limra/cassette-ac.png";
import towerAcImage from "../../assets/limra/tower-ac.png";
import waterCoolerImage from "../../assets/limra/water-cooler.png";
import vrfImage from "../../assets/limra/vrf.png";

const categories = [
  {
    title: "Split AC",
    type: "Residential",
    description: "High-efficiency cooling for your home and office.",
    image: splitAcImage,
    label: "Popular",
  },
  {
    title: "Window AC",
    type: "Residential",
    description: "Compact and powerful cooling for any room.",
    image: windowAcImage,
  },
  {
    title: "Cassette AC",
    type: "Commercial",
    description: "Discreet ceiling-mounted cooling for larger spaces.",
    image: cassetteAcImage,
  },
  {
    title: "Tower AC",
    type: "Commercial",
    description: "Powerful floor-standing cooling with a sleek design.",
    image: towerAcImage,
  },
  {
    title: "Water Cooler and Dispenser",
    type: "Industrial",
    description: "Reliable chilled-water solutions for every workplace.",
    image: waterCoolerImage,
  },
  {
    title: "VRF",
    type: "Industrial",
    description: "Advanced climate control for complex buildings.",
    image: vrfImage,
    label: "Advanced",
  },
];

const ProductCard = ({ category }) => (
  <a
    href="#contact"
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
  >
    {category.label && (
      <span className="absolute right-4 top-4 z-10 rounded-full bg-sky-700 px-3 py-1 text-xs font-bold text-white shadow">
        {category.label}
      </span>
    )}
    <div className="flex h-56 items-center justify-center overflow-hidden bg-white p-5">
      <img
        src={category.image}
        alt={category.title}
        loading="lazy"
        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 pt-2">
      <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
        {category.type}
      </p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {category.title}
      </h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
        {category.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
        Explore category
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </span>
    </div>
  </a>
);

const ProductSection = () => {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Shop by top categories
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Don’t miss out – shop trending cooling products today
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Find the right air-conditioning and refrigeration solution for your
            home, office or facility.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <ProductCard key={category.title} category={category} />
          ))}
        </div>
        <div className="mt-9 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sky-700 px-6 py-3 font-bold text-sky-800 transition hover:bg-sky-700 hover:text-white"
          >
            View all products <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
