import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';
import { coreHighlights } from '../data/content';

const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const numValue = parseFloat(value);
  const count = useCounter(numValue, 2000, 0);

  useEffect(() => {
    setHasStarted(true);
  }, []);

  return (
    <span>
      {hasStarted ? count : 0}
      {suffix}
    </span>
  );
};

export const CoreHighlights = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Agricultural Excellence"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreHighlights.map((highlight, index) => (
            <div
              key={highlight.label}
              className="text-center transform hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 mb-1 sm:mb-2">
                {isVisible && (
                  <AnimatedCounter value={highlight.value} suffix={highlight.suffix} />
                )}
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base leading-tight">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
