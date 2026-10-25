
import { useState } from "react";

const Form = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi LIMRA Sales & Services, I would like to request a quote.",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Service: ${formData.get("service")}`,
    ].join("\n");
    const url = `https://wa.me/919839171701?text=${encodeURIComponent(message)}`;

    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="quick-booking"
      className="w-full rounded-2xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8"
    >
      <h2 className="mb-6 font-serif text-2xl font-bold">
        <span className="mr-2 text-sky-500">✦</span>
        Quick Service Booking
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          aria-label="Full Name"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email Address"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          aria-label="Phone Number"
          autoComplete="tel"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          name="service"
          aria-label="Select Service"
          defaultValue=""
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-600 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          <option value="" disabled>
            Select Service
          </option>
          <option>AC Repair</option>
          <option>AC Installation</option>
          <option>AC Maintenance</option>
          <option>AC Seeling</option>
          <option>General Enquiry</option>
        </select>
        <button
          type="submit"
          className="w-full rounded-xl bg-sky-500 px-5 py-4 font-bold text-white shadow-md transition hover:bg-sky-600"
        >
          ↗ GET INSTANT QUOTE
        </button>
      </form>
      {whatsAppUrl && (
        <p className="mt-3 text-center text-sm text-slate-600" aria-live="polite">
          WhatsApp not opening?{" "}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-700 underline"
          >
            Continue your enquiry here
          </a>
          .
        </p>
      )}

      <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
        <span>✓ 100% Secure</span>
        <span>✓ No Hidden Charges</span>
        <span>✓ Instant Response</span>
      </div>
    </div>
  );
};

export default Form;
