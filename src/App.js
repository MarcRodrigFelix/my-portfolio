import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    // <main className="text-gray-400 bg-gray-900 body-font">
    <main>
        <Navbar /> 
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  );
}

export default App;
