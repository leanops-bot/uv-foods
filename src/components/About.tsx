import { useRef } from 'react';
import { Users, Target, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { leadership } from '../data/content';

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Nourishing India Since 1986
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Three generations of commitment to fighting hunger and malnutrition
          </p>
        </div>

        <div
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div className="text-center">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Our Partnership</h3>
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                  UV Foods holds a strategic 50% stake in Suruchi Foods (founded 1986), combining decades of heritage with modern manufacturing excellence and innovation.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                  To be India's most trusted partner in nutritional food manufacturing,
                  empowering communities through quality and innovation.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                  To fight hunger and malnutrition by serving the nation with safe, quality food
                  solutions that reach every corner of India.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">Strategic Partnership</h3>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border-2 border-purple-200">
                <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
                  <div className="bg-gradient-to-r from-purple-800 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-lg">
                    UV Foods Pvt. Ltd.
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-800">⟷</div>
                  <div className="bg-gradient-to-r from-purple-800 to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-lg">
                    Suruchi Foods Pvt. Ltd.
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    50% Strategic Partnership • Founded 1986
                  </p>
                  <div className="mt-4 bg-white/60 px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block">
                    <p className="text-xs sm:text-sm text-gray-600">Associated with: <span className="font-semibold text-purple-900">Brindavan Group</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Leadership Excellence
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader, index) => (
              <div
                key={leader.name}
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-800 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white text-xl sm:text-2xl font-bold group-hover:scale-110 transition-transform">
                  {leader.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                <p className="text-sm sm:text-base text-purple-700 font-semibold mb-2 sm:mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Agricultural Innovation"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end">
              <div className="p-6 sm:p-8 md:p-10 text-center w-full">
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white italic max-w-4xl mx-auto leading-relaxed">
                  "Together with Suruchi Foods, our mission goes beyond food — we nourish communities, build livelihoods, and drive self-reliance across India."
                </blockquote>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
