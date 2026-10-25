import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../assets/limra/logo.png";

const quickLinks = [
  ["Home", "#home"],
  ["Our story", "#about"],
  ["Services", "#services"],
  ["Products", "#products"],
  ["Contact us", "#contact"],
];

const services = [
  "AC installation & repair",
  "Annual maintenance",
  "Commercial HVAC",
  "VRF & chiller systems",
  "Cold rooms & ventilation",
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 px-5 py-14 text-slate-300 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" aria-label="LIMRA Sales & Services home">
            <img
              src={logo}
              alt="LIMRA Sales & Services"
              className="w-60 rounded bg-white p-2"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Your local partner for air conditioning, refrigeration and complete
            HVAC solutions for homes and businesses.
          </p>
          <p className="mt-4 text-sm font-semibold text-sky-300">
            Serving Hardoi and Uttar Pradesh
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <a className="transition hover:text-sky-300" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Our services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <a
                  className="transition hover:text-sky-300"
                  href="#services"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Contact us</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href="tel:+919839171701"
                className="flex items-start gap-3 hover:text-sky-300"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-sky-400" />
                +91 98391 71701
              </a>
            </li>
            <li>
              <a
                href="mailto:info@limrasales.com"
                className="flex items-start gap-3 hover:text-sky-300"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-sky-400" />
                info@limrasales.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sky-400" />
              184, New Civil Lines, Hardoi, Uttar Pradesh 241001
            </li>
            <li className="flex items-start gap-3">
              <Clock3 size={18} className="mt-0.5 shrink-0 text-sky-400" />
              Monday – Saturday, 9:00 AM – 7:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} LIMRA Sales &amp; Services. All rights
          reserved.
        </p>
        <a
          href="https://maps.google.com/?q=184,+New+Civil+Lines,+Hardoi,+Uttar+Pradesh+241001"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-sky-300"
        >
          Visit us in Hardoi <ArrowRight size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
