import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import AboutMe from './components/About/AboutMe';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      <ContactMe/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
