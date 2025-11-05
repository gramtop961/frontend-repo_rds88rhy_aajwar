import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.18),rgba(17,24,39,0))]" />
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full blur-3xl opacity-40 bg-violet-500/30" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full blur-3xl opacity-30 bg-cyan-500/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <Sparkles size={14} className="text-cyan-300" />
              Tech-forward portfolio experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              We craft sleek, interactive products
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">for ambitious tech brands</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg leading-7 text-white/70 max-w-xl"
            >
              From rapid prototypes to polished launches — we design and build immersive interfaces that feel modern, fast, and downright delightful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
              >
                See our work
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="text-sm text-white/80 hover:text-white">Explore services</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { label: 'Startups', value: '25+' },
                { label: 'Products', value: '40+' },
                { label: 'Awards', value: '8' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">{kpi.value}</div>
                  <div className="text-xs text-white/60">{kpi.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
