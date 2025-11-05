import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.18),rgba(17,24,39,0))]" />
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full blur-3xl opacity-40 bg-violet-500/30" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full blur-3xl opacity-30 bg-cyan-500/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Tech-first portfolio
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">sleek. modern. playful.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg leading-7 text-white/70 max-w-xl"
            >
              Minimal surface area, maximum impact. Interact with the 3D canvas and then glide through an animated scroller.
            </motion.p>
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
