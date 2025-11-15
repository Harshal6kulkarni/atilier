import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-gray-950 to-violet-950/20" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Emotion. Structure. <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Experience.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Atelier Dream 3 crafts tactile prototypes, luxury packaging, and cinematic 3D visuals that move products off the screen and into customers' hands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToWork}
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>See Selected Work</span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-white">200+</div>
            <div className="text-sm text-gray-400">renders shipped</div>
          </div>
          <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-white">&lt;48h</div>
            <div className="text-sm text-gray-400">first draft</div>
          </div>
          <div className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-white">97%</div>
            <div className="text-sm text-gray-400">on-time delivery</div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm text-gray-500 mb-4">Trusted by founders in FMCG, D2C, and luxury goods</p>
        </div>
      </div>
    </section>
  );
}
