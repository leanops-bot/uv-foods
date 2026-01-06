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
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 px-4">Strategic Partnership</h3>
            <div className="max-w-4xl mx-auto">
              {/* Partnership Infographic */}
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800"></div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative z-10">
                  {/* UV Foods */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full flex items-center justify-center shadow-lg mb-4">
                      <span className="text-2xl font-bold text-white">UV</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">UV Foods</h4>
                    <p className="text-sm text-gray-500">Est. 2024</p>
                  </div>

                  {/* Connection */}
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-2 bg-purple-50 rounded-full border border-purple-100 text-purple-700 font-semibold text-sm mb-2">
                      50% Stake
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 md:w-24 h-0.5 bg-gray-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-purple-600 flex items-center justify-center bg-white text-purple-600">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="w-16 md:w-24 h-0.5 bg-gray-300"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">Strategic Alliance</p>
                  </div>

                  {/* Suruchi Foods */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg mb-4">
                      <span className="text-2xl font-bold text-purple-900">SF</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Suruchi Foods</h4>
                    <p className="text-sm text-gray-500">Est. 1986</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500 mb-4">Backed by the legacy of</p>
                  <div className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-serif italic text-lg shadow-md">
                    Brindavan Group
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why UV Foods Section */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 px-4 text-center">
              Why UV Foods Private Limited?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">The Collaborative Advantage</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  UV Foods Private Limited operates as a focused contracting, execution, and supply entity, while leveraging the established manufacturing infrastructure, experience, and quality systems of Suruchi Foods Private Limited.
                </p>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <p className="text-sm font-semibold text-purple-700 mb-2">Why this structure exists:</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    This structure enables operational efficiency, regulatory compliance, and scalable execution — without compromising on manufacturing reliability.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">What this means for customers:</h4>
                <ul className="space-y-3">
                  {[
                    'Single-point contracting and coordination through UV Foods',
                    'Proven manufacturing execution via Suruchi Foods (Est. 1986)',
                    'Faster tender execution and operational flexibility',
                    'Dedicated focus on government, institutional, and bulk supply programs'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Accreditations & Standards */}
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Accreditations & Standards</h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center cursor-pointer">
              {/* FSSAI */}
              <a
                href="/assets/docs/quality-certifications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 group-hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-700">FSSAI</span>
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-purple-600">
                  Lic. No. 127190011000645 <br /> (View Certificate)
                </span>
              </a>

              {/* ISO 9001 */}
              <a
                href="/assets/docs/quality-certifications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 group-hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-700">ISO 9001:2015</span>
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-purple-600">
                  Quality Management <br /> (View Certificate)
                </span>
              </a>

              {/* ISO 22000 */}
              <a
                href="/assets/docs/quality-certifications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 group-hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-700">ISO 22000:2018</span>
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-purple-600">
                  Food Safety <br /> (View Certificate)
                </span>
              </a>
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
                className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    </section >
  );
};
