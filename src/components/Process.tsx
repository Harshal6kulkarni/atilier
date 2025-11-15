import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Brief, constraints, success metrics, and competitive mapping."
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Define",
    description: "Concepts, CMF direction, structure + feasibility checks."
  },
  {
    icon: Cog,
    number: "03",
    title: "Develop",
    description: "Prototypes or CGI sprints with weekly reviews."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deliver",
    description: "Master assets, specs, and rollout support."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Process</h2>
          <p className="text-xl text-gray-400">Structured sprints from brief to delivery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-cyan-900/50 transition-colors">
                    {step.number}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
            See a Sample Timeline
          </button>
        </div>
      </div>
    </section>
  );
}
