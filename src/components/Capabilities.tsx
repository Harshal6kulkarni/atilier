import { Box, Package, Sparkles, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: Box,
    title: "Tactile Prototyping",
    description: "From appearance models to functional rigs, we translate concept to hand.",
    items: ["Appearance models", "Fit/finish rigs", "CMF sampling", "Packaging dummies"]
  },
  {
    icon: Package,
    title: "Luxury Packaging",
    description: "Premium structures, materials, and closures for unforgettable unboxing.",
    items: ["Structural design", "Inlays and trays", "Specialty papers", "Magnetics and ribbons"]
  },
  {
    icon: Sparkles,
    title: "3D/CGI Visualization",
    description: "Photoreal visuals that sell the story—before tooling.",
    items: ["Hero renders", "Animations", "Configurators", "E-comm asset packs"]
  },
  {
    icon: Globe,
    title: "UX/Web for Product Stories",
    description: "Conversion-focused landing pages and product narratives.",
    items: ["Landing pages", "PDPs", "Interactives", "Asset systems"]
  }
];

export default function Capabilities() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Capabilities</h2>
          <p className="text-xl text-gray-400">From appearance models to launch-ready asset packs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>

                <ul className="space-y-2">
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
