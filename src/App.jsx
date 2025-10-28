import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import Gallery from "./components/Gallery";
import Wisdom from "./components/Wisdom";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-semibold text-indigo-900">
          Sri Siddhi
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
          <li>
            <a className="hover:text-indigo-700" href="#offerings">Programs</a>
          </li>
          <li>
            <a className="hover:text-indigo-700" href="#gallery">Media</a>
          </li>
          <li>
            <a className="hover:text-indigo-700" href="#wisdom">Wisdom</a>
          </li>
        </ul>
        <a
          href="#offerings"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
        >
          Join a Program
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Sri Siddhi. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#wisdom" className="hover:text-white">Teachings</a>
            <a href="#offerings" className="hover:text-white">Programs</a>
            <a href="#gallery" className="hover:text-white">Media</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Offerings />
        <Gallery />
        <Wisdom />
      </main>
      <Footer />
    </div>
  );
}
