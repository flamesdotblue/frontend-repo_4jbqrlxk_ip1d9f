import { Calendar, BookOpen, Clock, ShoppingBag, CheckCircle2 } from "lucide-react";

const programs = [
  {
    title: "Foundations of Meditation",
    level: "Beginner",
    schedule: "Mon & Wed, 7:00–8:00 PM",
    nextJoin: "Nov 10, 2025",
    focus: "Breath, posture, and inner stillness.",
  },
  {
    title: "Bhakti & Devotional Practices",
    level: "All Levels",
    schedule: "Sat, 9:00–11:00 AM",
    nextJoin: "Nov 16, 2025",
    focus: "Chanting, kirtan, and heart-opening rituals.",
  },
  {
    title: "Advanced Mindfulness Retreat",
    level: "Advanced",
    schedule: "Sun, 6:00–9:00 AM",
    nextJoin: "Dec 1, 2025",
    focus: "Silent immersion and deep presence.",
  },
];

const materials = [
  {
    name: "Sacred Incense Set",
    desc: "Hand-blended resins and herbs for daily sadhana.",
    price: "$18",
  },
  {
    name: "Prayer Mala (Rudraksha)",
    desc: "108 beads purified with traditional rituals.",
    price: "$32",
  },
  {
    name: "Guided Meditation Series",
    desc: "12-part audio journey into inner silence.",
    price: "$24",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1 text-indigo-700">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Programs & Schedules</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Train with Guidance. Grow with Community.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Structured classes designed to steadily deepen your practice. Secure
            sign-ups and reminders for every session.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                  {p.level}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.focus}</p>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-indigo-600" /> {p.schedule}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-600" /> Next joining: {p.nextJoin}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#wisdom"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
                >
                  <CheckCircle2 className="h-4 w-4" /> Learn More
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Details
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              Spiritual Materials
            </h3>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <ShoppingBag className="h-4 w-4" /> View More
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {materials.map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="h-32 w-full rounded-xl bg-gradient-to-br from-indigo-200 to-fuchsia-200" />
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{m.name}</h4>
                <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium text-indigo-700">{m.price}</span>
                  <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
