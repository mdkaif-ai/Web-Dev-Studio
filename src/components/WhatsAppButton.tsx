import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappWindow = window.open("https://wa.me/+919140613637?text=Hi! I'm interested in your services.", "_blank");
    if (!whatsappWindow) {
      // Fallback for blocked popups
      window.location.href = "https://wa.me/+919140613637?text=Hi! I'm interested in your services.";
    }
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default WhatsAppButton;