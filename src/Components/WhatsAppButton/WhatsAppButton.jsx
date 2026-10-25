import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919839171701"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with LIMRA on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sky-700 text-white shadow-xl transition hover:scale-105 hover:bg-sky-800"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;
