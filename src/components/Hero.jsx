import { Heart, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-800 to-violet-800 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Welcome to Sri Siddhi</span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
            A Sacred Space to Deepen Your Connection
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
              with the Divine
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg text-indigo-100">
            Explore teachings, sacred practices, and living wisdom. Join programs,
            learn with guided classes, and discover materials that nourish the
            soul—all in one secure, peaceful sanctuary.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-indigo-900 shadow-lg shadow-white/10 transition hover:scale-105"
            >
              <Star className="h-5 w-5" /> Explore Programs
            </a>
            <a
              href="#wisdom"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Heart className="h-5 w-5" /> Read Teachings
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-left sm:w-auto">
            <Stat number="10k+" label="Community Members" />
            <Stat number="250+" label="Guided Sessions" />
            <Stat number="24/7" label="Secure & Private" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
      <div className="text-2xl font-semibold text-white">{number}</div>
      <div className="text-sm text-indigo-100/80">{label}</div>
    </div>
  );
}
