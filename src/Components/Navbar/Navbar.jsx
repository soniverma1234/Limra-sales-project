import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "../../assets/limra/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Our Story", "#about"],
    ["Services", "#services"],
    ["Products", "#products"],
    ["Blog", "#blog"],
    ["Contact Us", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8"
      >
        <a href="#home" aria-label="LIMRA Sales & Services home">
          <img
            src={logo}
            alt="LIMRA Sales and Services - A complete solution for refrigeration"
            className="w-48 max-w-[62vw] object-contain sm:w-56"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-700 transition hover:text-sky-700"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="tel:+919839171701"
          className="hidden items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-sky-800 sm:flex"
        >
          <Phone size={16} />
          Enquiry Now
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 top-full z-50 w-full border-t border-slate-100 bg-white p-5 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:+919839171701"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-sky-700 px-5 py-3 font-bold text-white"
            >
              <Phone size={17} />
              Enquiry Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
