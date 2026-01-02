import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-800 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl">UV</span>
            </div>
            <div className="min-w-0">
              <h1
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors truncate ${isScrolled ? 'text-purple-900' : 'text-white'
                  }`}
              >
                UV Foods Private Limited
              </h1>
              <p
                className={`text-xs transition-colors truncate ${isScrolled ? 'text-gray-600' : 'text-gray-200'
                  }`}
              >
                A Suruchi Foods Enterprise
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
            >
              Inquire Now
            </button>
          </div>

          <button
            className="md:hidden p-2 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white rounded-lg shadow-lg p-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Inquire Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
