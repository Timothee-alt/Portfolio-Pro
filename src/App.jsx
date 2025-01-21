import './App.css'
import Hero from './assets/Pages/Hero/Hero';
import ShaderGradient from './assets/Components/Background/ShaderGradient';
import About from './assets/Pages/About/About';
import Skills from './assets/Pages/Skills/Skills';

function App() {

  return (
    <>
    <div className='relative min-h-screen'>
      <ShaderGradient />
      <div className='relative z-10'>
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
    </>
  )
}

export default App
