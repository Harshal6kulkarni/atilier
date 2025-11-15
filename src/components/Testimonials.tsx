import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The prototypes closed our retail pitch in one meeting.",
    author: "Head of Brand",
    company: "D2C Beauty"
  },
  {
    quote: "Their renders outperformed studio photos in CTR.",
    author: "Growth Lead",
    company: "FMCG"
  },
  {
    quote: "Launch-ready assets without the studio overhead. Game-changer.",
    author: "Founder",
    company: "Luxury Goods"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Client Notes</h2>
          <div className="flex justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-400">5.0 on founder networks</p>
        </div>

        <div className="relative">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 text-center">
              "{current.quote}"
            </blockquote>

            <div className="text-center">
              <p className="text-gray-300 font-medium">{current.author}</p>
              <p className="text-gray-500 text-sm">{current.company}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
