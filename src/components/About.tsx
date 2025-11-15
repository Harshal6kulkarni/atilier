import { Check } from 'lucide-react';

const highlights = [
  "Multi-disciplinary stack",
  "Rapid iteration",
  "Founder-friendly collaboration",
  "Confidentiality-first"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">About Atelier Dream 3</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A design atelier balancing industrial rigor with cinematic storytelling. Blending prototyping, structural packaging, and 3D to create persuasion-ready product experiences.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">D3</span>
                  </div>
                  <p className="text-gray-400 text-sm">Studio workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
