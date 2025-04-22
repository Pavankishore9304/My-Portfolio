import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Clock from './components/Clock';
import CursorFader from './components/CursorFader';
// Potentially add a Footer component later

function App() {
  return (
    // Added dark mode radial gradient, kept light mode simple
    // Ensure relative and overflow-x-hidden are still present
    <div className="App bg-slate-50 dark:bg-black dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-indigo-900/60 dark:via-black dark:to-black transition-colors duration-300 relative overflow-x-hidden">
      <CursorFader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Clock />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
