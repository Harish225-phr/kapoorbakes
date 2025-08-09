import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "+919876543210"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in your bakery products.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;