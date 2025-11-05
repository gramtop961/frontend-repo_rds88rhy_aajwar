import { useState } from 'react';
import { Rocket, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight text-white">BlueTech Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 hover:opacity-90 transition"
            >
              Start a project
              <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20"
                onClick={() => setOpen(false)}
              >
                Start a project
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
