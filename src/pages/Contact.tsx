import { MessageCircle, Mail, Instagram, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const handleContactMethod = (method: string) => {
    const message = selectedPlan 
      ? `Hi! I'm interested in the ${selectedPlan}. Can you provide more details?`
      : "Hi! I'd like to start a project with you.";
    
    if (method === 'whatsapp') {
      window.open(`https://wa.me/+919140613637?text=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'email') {
      const subject = selectedPlan ? `${selectedPlan} Inquiry` : "Project Inquiry";
      window.open(`mailto:Alimahparveen2420@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'instagram') {
      window.open("https://instagram.com/alimah__20", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-white mb-4">
            Choose Contact
            <span className="text-red-500 font-normal"> Method</span>
          </h1>
          {selectedPlan && (
            <div className="mb-4 p-3 bg-red-600/10 border border-red-600/20 rounded-xl">
              <p className="text-red-400 font-light text-sm">
                Selected Plan: <span className="font-semibold">{selectedPlan}</span>
              </p>
            </div>
          )}
          <p className="text-gray-400 font-light">
            Select your preferred way to get in touch with us
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          <button 
            onClick={() => handleContactMethod('whatsapp')}
            className="w-full flex items-center space-x-4 p-6 rounded-2xl border border-white/20 hover:bg-green-600/20 hover:border-green-500 transition-all duration-300 bg-black/50 backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transform"
          >
            <MessageCircle className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <div className="text-white font-light text-lg">WhatsApp</div>
              <div className="text-gray-400 text-sm">Instant messaging & quick response</div>
            </div>
          </button>
          
          <button 
            onClick={() => handleContactMethod('email')}
            className="w-full flex items-center space-x-4 p-6 rounded-2xl border border-white/20 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 bg-black/50 backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform"
          >
            <Mail className="w-8 h-8 text-blue-500" />
            <div className="text-left">
              <div className="text-white font-light text-lg">Email</div>
              <div className="text-gray-400 text-sm">Professional communication</div>
            </div>
          </button>
          
          <button 
            onClick={() => handleContactMethod('instagram')}
            className="w-full flex items-center space-x-4 p-6 rounded-2xl border border-white/20 hover:bg-pink-600/20 hover:border-pink-500 transition-all duration-300 bg-black/50 backdrop-blur-xl hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 transform"
          >
            <Instagram className="w-8 h-8 text-pink-500" />
            <div className="text-left">
              <div className="text-white font-light text-lg">Instagram</div>
              <div className="text-gray-400 text-sm">Social media & visual updates</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;