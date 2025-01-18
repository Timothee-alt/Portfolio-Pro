import './App.css'
import Hero from './assets/Pages/Hero/Hero';
import ShaderGradient from './assets/Components/Background/ShaderGradient';

function App() {

  return (
    <>
    <div className='relative min-h-screen'>
      <ShaderGradient />
      <div className='relative z-10'>
      <Hero />
      </div>
    </div>
    </>
  )
}

export default App
