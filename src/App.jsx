import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />

        <section id="about" className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About us</h2>
                <p className="mt-4 text-white/70 leading-7">
                  We’re a small, senior team obsessed with craft and speed. We mix product thinking, engineering, and motion design to ship experiences that feel effortless and cutting‑edge.
                </p>
                <p className="mt-3 text-white/70 leading-7">
                  Based on proven systems and modern tooling, our approach scales from early concepts to production launches without friction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Design Systems',
                  'Web Apps',
                  '3D & Motion',
                  'Rapid Prototyping',
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} BlueTech Studio. All rights reserved.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
          >
            Contact us
          </a>
        </div>
      </footer>
    </div>
  );
}
