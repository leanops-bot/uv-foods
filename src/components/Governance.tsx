import { useRef } from 'react';
import { Shield, CheckCircle2, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { complianceBadges } from '../data/content';

export const Governance = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices and transparent operations',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Excellence in every product, meeting and exceeding international standards',
    },
    {
      icon: CheckCircle2,
      title: 'Accountability',
      description: 'Taking responsibility for our impact on communities and the environment',
    },
  ];

  return (
    <section id="governance" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Governance & Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Built on transparency, integrity, and world-class compliance standards
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-800 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {complianceBadges.map((badge, index) => (
              <div
                key={badge}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </div>
                <p className="text-xs sm:text-sm font-semibold">{badge}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Through our partnership with Suruchi Foods, our commitment to excellence is validated by rigorous certifications and compliance
              with national and international food safety standards. We maintain the highest
              levels of quality assurance across all partnership operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
