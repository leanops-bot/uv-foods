import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you shortly.');
    setFormData({ name: '', email: '', category: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/98 to-white/98"></div>
      </div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Partner With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We collaborate with governments, NGOs, and enterprises committed to eradicating
            hunger and advancing nutrition
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div>
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-1">Plant Location</h4>
                    <p className="text-purple-100 text-xs sm:text-sm">
                      Suruchi Foods Private Limited<br />
                      Chhata Industrial Area, Mathura,<br />
                      Uttar Pradesh – 281401, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-1">Email</h4>
                    <p className="text-purple-100 text-xs sm:text-sm break-all">info@uvfoods.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-1">Phone</h4>
                    <p className="text-purple-100 text-xs sm:text-sm">+91-XXX-XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Corporate Office — Delhi
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                UV Foods Private Limited<br />
                704, 7th Floor, Deepali Building,<br />
                92, Nehru Place, New Delhi – 110019, India
                <br />
                <span className="text-sm text-purple-700 mt-2 block">Visit by appointment only</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                >
                  <option value="">Select category</option>
                  <option value="new_business">New Business Inquiry</option>
                  <option value="tender">Government Tender / Procurement</option>
                  <option value="bulk_supply">Bulk Supply Partnership</option>
                  <option value="export">Export Opportunities</option>
                  <option value="distributorship">Distributorship</option>
                  <option value="product_info">Product Information</option>
                  <option value="general">General Query</option>
                </select>
              </div>

              {formData.category === 'tender' && (
                <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department / Org</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="e.g. WCD, ICDS" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Est. Volume (MT)</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Monthly Req." />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-800 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:from-purple-900 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
