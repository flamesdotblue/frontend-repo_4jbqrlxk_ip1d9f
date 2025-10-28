import { Quote, ShieldCheck } from "lucide-react";

const teachings = [
  {
    quote:
      "Silence is not the absence of sound; it is the presence of the Divine in every breath.",
    source: "Sri Siddhi Teachings",
  },
  {
    quote:
      "When the heart bows in gratitude, the mind awakens to true wisdom.",
    source: "Sri Siddhi Teachings",
  },
  {
    quote:
      "Discipline in practice is love in action.",
    source: "Sri Siddhi Teachings",
  },
];

export default function Wisdom() {
  return (
    <section id="wisdom" className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-indigo-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1 text-indigo-700">
            <Quote className="h-4 w-4" />
            <span className="text-sm font-medium">Divine Wisdom</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Teachings for a Steady Heart and Clear Mind
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Short contemplations to accompany your daily sadhana. Return to these
            words whenever you seek clarity and devotion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teachings.map((t, i) => (
            <blockquote
              key={i}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-indigo-300" />
              <p className="text-slate-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {t.source}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-indigo-700" />
            <div>
              <h3 className="font-semibold text-indigo-900">Your safety matters</h3>
              <p className="mt-1 text-sm text-indigo-900/80">
                We use advanced encryption and best-practice authentication to protect your
                registrations, purchases, and personal data—so you can focus on practice with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
