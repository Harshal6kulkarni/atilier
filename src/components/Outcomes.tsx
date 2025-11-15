import { Zap, Award, Package } from 'lucide-react';

const outcomes = [
  {
    icon: Zap,
    title: "Faster Decisions",
    description: "Convince stakeholders with tactile and CGI clarity."
  },
  {
    icon: Award,
    title: "Premium Perception",
    description: "CMF, lighting, and structure tuned to luxury cues."
  },
  {
    icon: Package,
    title: "Launch-Ready Assets",
    description: "Renders and cuts sized for PDPs, ads, and print."
  }
];

export default function Outcomes() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Outcomes We Deliver</h2>
          <p className="text-xl text-gray-400">Measurable impact on perception and conversion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-gray-300">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
