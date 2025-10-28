import { PlayCircle } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1 text-violet-700">
            <PlayCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Videos & Photos</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            Experience the Path in Motion and Stillness
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Browse satsangs, guided meditations, and visual teachings from recent
            gatherings and retreats.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/5N5-0dCIx98"
              title="Guided Meditation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/8X3Zuj0J2wE"
              title="Bhakti Kirtan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {[
            "https://images.unsplash.com/photo-1520975922284-9f9a10329c15?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
          ].map((src, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl border border-slate-200">
              <img src={src} alt="Spiritual scene" className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
