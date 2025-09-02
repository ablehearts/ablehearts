import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="relative py-28">
      {/* Content only - no background elements */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
          Our Mission
        </h2>
        <div className="w-24 h-1 bg-rose-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We connect{" "}
          <span className="text-rose-600 font-semibold">
            compassionate donors{" "}
          </span>
          with <span className="text-rose-600 font-semibold">real needs</span>{" "}
          around the world. Every gift, no matter the size, brings{" "}
          <span className="text-rose-600 font-semibold">dignity </span>
          and <span className="text-rose-600 font-semibold">hope</span> to
          communities that need it most.
        </p>

        <div className="mt-10">
          <Link
            href="/donate"
            className="inline-block px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Join the Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
