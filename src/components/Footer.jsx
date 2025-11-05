export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Journey</p>
        <div className="text-sm text-white/70">
          From moments to innovation — let’s create together.
        </div>
      </div>
    </footer>
  );
}
