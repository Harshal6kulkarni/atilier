import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Lumen Scent System",
    blurb: "Modular perfume kit with satin unboxing and velvet inlays.",
    tags: ["Packaging", "Prototype", "CGI"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Nocturne Serum",
    blurb: "Luxury skincare with magnetic closures and frosted glass.",
    tags: ["Packaging", "CGI", "E-comm"],
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    title: "Vita Kitchen System",
    blurb: "Modular food containers with CMF-tuned stacking logic.",
    tags: ["Prototype", "CMF", "CGI"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Axis Audio Collection",
    blurb: "Premium speaker lineup with configurator and hero animations.",
    tags: ["CGI", "Interactive", "E-comm"],
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-xl text-gray-400">Recent projects where craft meets conversion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.blurb}</p>

                <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
