import { HeartHandshake, Globe2, ShieldCheck } from "lucide-react";

export default function HighlightsSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <HeartHandshake className="w-12 h-12 mx-auto text-rose-600 mb-4" />
        <h3 className="font-semibold text-xl text-brand-dark mb-2">
          Transparent Giving
        </h3>
        <p className="text-gray-600">
          100% accountability—know exactly how your gift is used.
        </p>
      </div>
      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <Globe2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
        <h3 className="font-semibold text-xl text-brand-dark mb-2">
          Global Reach
        </h3>
        <p className="text-gray-600">
          From local communities to international impact, we cross borders.
        </p>
      </div>
      <div className="p-6 bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <ShieldCheck className="w-12 h-12 mx-auto text-green-600 mb-4" />
        <h3 className="font-semibold text-xl text-brand-dark mb-2">
          Human Dignity
        </h3>
        <p className="text-gray-600">
          Every project we support uplifts dignity as the core value.
        </p>
      </div>
    </section>
  );
}
