import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
    {
        name: 'Soya Flour',
        description: 'High-protein soya flour availabe in bulk sacks for institutional supply.',
        image: '/images/products/soya-flour.png',
    },
    {
        name: 'Dalia (Broken Wheat)',
        description: 'Nutritious broken wheat for mid-day meals and breakfast programs.',
        image: '/images/products/dalia.png',
    },
    {
        name: 'Sattu',
        description: 'Traditional roasted gram flour, a powerhouse of protein and energy.',
        image: '/images/products/sattu.png',
    },
    {
        name: 'Murmura (Puffed Rice)',
        description: 'Light and crunchy puffed rice, ideal for fortified snacks.',
        image: '/images/products/murmura.png',
    },
    {
        name: 'Halwa Mix',
        description: 'Instant halwa mix fortified with essential vitamins and minerals.',
        image: '/images/products/halwa-mix.png',
    },
    {
        name: 'Fortified Rice Kernels',
        description: 'Rice kernels enriched with micronutrients to combat malnutrition.',
        image: '/images/products/frk.png',
    },
    {
        name: 'Ready-to-Eat Meals',
        description: 'Convenient, safe, and nutritious meals for immediate consumption.',
        image: '/images/products/rte-meal.png',
    },
    {
        name: 'Pulses Flour',
        description: 'High-quality besan and other pulse flours from our state-of-the-art mill.',
        image: '/images/products/pulses-flour.png',
    },
];

export const Products = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                        Product Portfolio
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Manufactured and supplied under strict quality and regulatory standards for institutional and government programs.
                    </p>
                </div>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
