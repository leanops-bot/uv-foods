import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">UV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">UV Foods Private Limited</h3>
                <p className="text-sm text-purple-200">A Suruchi Foods Enterprise</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-sm mb-6">
              <div>
                <strong className="text-white block">Manufacturing Facility:</strong>
                Chhata Industrial Area, Mathura,<br />
                Uttar Pradesh – 281401, India
              </div>
              <div>
                <strong className="text-white block">Corporate Office:</strong>
                704, 7th Floor, Deepali Building,<br />
                92, Nehru Place, New Delhi – 110019, India
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@uvfoods.in"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Products', 'Our Businesses', 'Sustainability', 'Governance', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '').replace('our', '')}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/assets/docs/corporate-brochure.pdf" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Brochure
                </a>
              </li>
              <li>
                <a href="/assets/docs/quality-certifications.pdf" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Quality Certifications
                </a>
              </li>
              <li>
                <a href="/assets/docs/tender-information.pdf" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  Tender Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  CSR Initiatives
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 UV Foods Private Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
