import daikinLogo from "../../assets/limra/brand-daikin.png";
import hitachiLogo from "../../assets/limra/brand-hitachi.png";
import mideaLogo from "../../assets/limra/brand-midea.png";
import mitsubishiLogo from "../../assets/limra/brand-mitsubishi.png";
import panasonicLogo from "../../assets/limra/brand-panasonic.png";
import carrierLogo from "../../assets/limra/brand-blue-star.png";
import blueStarLogo from "../../assets/limra/brand-carrier.jpg";

const brands = [
  { name: "Daikin", image: daikinLogo },
  { name: "Hitachi", image: hitachiLogo },
  { name: "Midea", image: mideaLogo },
  { name: "Mitsubishi Electric", image: mitsubishiLogo },
  { name: "Panasonic", image: panasonicLogo },
  { name: "Carrier", image: carrierLogo },
  { name: "Blue Star", image: blueStarLogo },
];

const BrandsSection = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Trusted brands
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
            Quality products from leading brands
          </h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {brands.map(({ name, image }) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center rounded-xl border border-slate-100 bg-white p-4 grayscale transition hover:grayscale-0"
            >
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
