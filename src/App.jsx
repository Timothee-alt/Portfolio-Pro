import './App.css'
import Hero from './assets/Pages/Hero/Hero';
import ShaderGradient from './assets/Components/Background/ShaderGradient';
import About from './assets/Pages/About/About';
import Skills from './assets/Pages/Skills/Skills';
import Project from './assets/Pages/Project/Project';
import Contact from './assets/Pages/Contact/Contact';

function App() {

  return (
    <>
    <div className='relative min-h-screen'>
      <ShaderGradient />
      <div className='relative z-10'>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App
