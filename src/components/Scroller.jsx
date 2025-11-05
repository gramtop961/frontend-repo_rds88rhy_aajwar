import { motion, useAnimationControls } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';

function MarqueeRow({ items = [], reverse = false, speed = 40 }) {
  const controls = useAnimationControls();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: reverse ? 0 : '-50%',
          transition: { duration: speed, ease: 'linear' },
        });
        await controls.set({ x: reverse ? '-50%' : 0 });
      }
    };
    loop();
  }, [controls, reverse, speed]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap will-change-transform"
        animate={controls}
        initial={{ x: reverse ? '-50%' : 0 }}
        aria-hidden
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-white/80 hover:text-white transition-colors text-lg sm:text-xl md:text-2xl tracking-wide"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Scroller() {
  const tech = ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Node', 'Postgres', 'MongoDB', 'Tailwind', 'Framer Motion', 'Three.js'];

  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),rgba(17,24,39,0))]" />

      <div className="relative min-h-[180vh]">
        <div className="sticky top-20 sm:top-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Technology that feels
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">effortless</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/70 leading-7">
              A single flowing canvas instead of boxes and cards. Scroll to explore our vibe — motion, depth, and clarity.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-white/70">
              <ArrowDown className="animate-bounce" size={18} />
              Keep scrolling
            </div>
          </div>
        </div>

        <div className="h-[120vh]" />
      </div>

      <div className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarqueeRow items={tech} speed={45} />
          <div className="h-6" />
          <MarqueeRow items={[...tech].reverse()} reverse speed={52} />
          <div className="h-6" />
          <MarqueeRow items={tech} speed={40} />
        </div>
      </div>

      <div className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed">
            We partner with founders and product teams to ship polished, performant experiences. Minimal surface, maximal sophistication.
          </p>
        </div>
      </div>
    </section>
  );
}
