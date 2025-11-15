const sectors = [
  "FMCG",
  "Beauty & Personal Care",
  "D2C Hardware",
  "Food & Beverage",
  "Lifestyle"
];

export default function Sectors() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Sectors</h2>
          <p className="text-xl text-gray-400">Expertise where touch, presentation, and speed-to-market matter most</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-violet-500/50 hover:bg-gradient-to-r hover:from-violet-900/20 hover:to-cyan-900/20 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-white font-medium group-hover:text-violet-300 transition-colors">
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
