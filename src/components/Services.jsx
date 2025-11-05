import { Cpu, Shield, Code, Rocket } from 'lucide-react';

const SERVICES = [
  {
    icon: Cpu,
    title: 'Product Engineering',
    desc: 'Full-stack web and mobile development with modern frameworks and cloud-native patterns.',
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    desc: 'Best practices baked in: auth, testing, observability, and scalable infrastructure.',
  },
  {
    icon: Code,
    title: 'Design Systems',
    desc: 'Reusable component libraries and accessible UI foundations that scale with your team.',
  },
  {
    icon: Rocket,
    title: 'Prototyping & R&D',
    desc: 'Rapid experimentation with 3D, motion, and micro-interactions to validate ideas fast.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),rgba(17,24,39,0))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Services</h2>
          <p className="mt-3 text-white/70">Partner with a team that blends design, engineering, and motion to ship standout experiences.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 grid place-items-center text-cyan-300 group-hover:from-cyan-400/30 group-hover:to-violet-500/30">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
