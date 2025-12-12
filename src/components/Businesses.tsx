import { useRef } from 'react';
import { Building2, Beaker, UtensilsCrossed, Globe, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { businessVerticals, plantCapacities } from '../data/content';

const iconMap = {
  Building2,
  Flask: Beaker,
  UtensilsCrossed,
  Globe,
};

export const Businesses = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="businesses" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Manufacturing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-purple-900/95"></div>
      </div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Our Business Verticals</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive food manufacturing solutions serving millions across India
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {businessVerticals.map((vertical, index) => {
            const Icon = iconMap[vertical.icon as keyof typeof iconMap];
            return (
              <div
                key={vertical.title}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{vertical.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{vertical.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Manufacturing Capabilities — Chhata, Mathura
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {plantCapacities.map((plant, index) => (
              <div
                key={plant.category}
                className={`bg-gradient-to-br from-purple-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-400/30 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2">{plant.category}</h4>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-3 sm:mb-4">{plant.capacity}</div>
                <ul className="space-y-2">
                  {plant.products.map((product) => (
                    <li key={product} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-800/30 to-purple-900/30 rounded-2xl p-6 sm:p-8 border border-purple-400/20">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center px-4">Our Value Chain</h4>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-center">
              {['Farmers', 'Traders', 'Suruchi Foods', 'UV Foods', 'Govt. Programs', 'Communities'].map(
                (step, index, arr) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base">
                      {step}
                    </div>
                    {index < arr.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-yellow-400 hidden sm:block" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
