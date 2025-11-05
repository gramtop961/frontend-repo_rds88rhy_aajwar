import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scroller from './components/Scroller';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

      <main>
        <Hero />

        <div id="flow">
          <Scroller />
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
