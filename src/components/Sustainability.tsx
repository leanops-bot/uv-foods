import { useRef, useState, useEffect } from 'react';
import { Apple, Users, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';
import { sustainabilityPillars, impactMetrics } from '../data/content';

const iconMap = {
  Apple,
  Users,
  Leaf,
};

const AnimatedMetric = ({ value, suffix, label }: { value: string; suffix: string; label: string }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const numValue = parseFloat(value);
  const count = useCounter(numValue, 2500, 0);

  useEffect(() => {
    setHasStarted(true);
  }, []);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
        {hasStarted ? count : 0}
        {suffix}
      </div>
      <div className="text-purple-200 font-medium text-sm sm:text-base">{label}</div>
    </div>
  );
};

export const Sustainability = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="sustainability" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Nourishing India's Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            One meal at a time — our commitment to sustainable nutrition and social impact
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {sustainabilityPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Our Impact in Numbers
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {impactMetrics.map((metric) =>
              isVisible ? (
                <AnimatedMetric
                  key={metric.label}
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                />
              ) : (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">0</div>
                  <div className="text-purple-200 font-medium text-sm sm:text-base">{metric.label}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Sustainable Farming"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="relative bg-gradient-to-br from-purple-900/95 to-purple-800/95 p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-purple-200">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8 px-4">
              From Farm to Community — Our Sustainable Value Chain
            </h3>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 relative z-10">
              {[
                { step: 'Raw Procurement', icon: '🌾' },
                { step: 'Cleaning', icon: '💧' },
                { step: 'Roasting', icon: '🔥' },
                { step: 'Packaging', icon: '📦' },
                { step: 'Distribution', icon: '🚚' },
                { step: 'Child Nutrition', icon: '👶' },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg text-2xl sm:text-3xl">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-white text-xs sm:text-sm">{item.step}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
