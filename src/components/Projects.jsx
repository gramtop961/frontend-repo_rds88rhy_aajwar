import { ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'NeuroPulse Analytics',
    desc: 'Realtime dashboard for ML model observability with streaming visualizations and alerts.',
    link: '#',
    tag: 'AI/ML',
    accent: 'from-cyan-400/20 to-violet-500/20',
  },
  {
    title: 'Orbit Commerce',
    desc: 'Headless e‑commerce platform with blazing-fast storefront and edge-cached APIs.',
    link: '#',
    tag: 'Web',
    accent: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'Quanta OS',
    desc: 'Design system and component library powering a suite of developer tools.',
    link: '#',
    tag: 'Design System',
    accent: 'from-fuchsia-400/20 to-violet-400/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected work</h2>
            <p className="mt-3 text-white/70">A snapshot of products we’ve recently helped bring to life.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
            Start a project <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden hover:border-white/20 transition">
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl opacity-60 bg-gradient-to-br ${p.accent}`} />
              <div className="relative">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">{p.tag}</span>
                <h3 className="mt-3 text-white font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-6">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                  View case study <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
