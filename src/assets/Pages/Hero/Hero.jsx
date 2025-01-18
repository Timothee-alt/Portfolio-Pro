import './Hero.css';
import Nav from '../../Components/HamburgerMenu/HamburgerMenu';
import { CiSaveDown1 } from "react-icons/ci";

function Hero() {
    return (
    <>
        <div>
            <Nav />
        </div>
        <div className='flex items-center justify-start relative ml-5 mt-16 md:justify-center md:mr-60 md:mt-40 lg:justify-center lg:mr-96 lg:mt-40'>
            <div className='flex flex-col items-center animate-pulse'> 
                <div className='bg-purple-900  rounded-full h-5 w-5 shadow-[0px_0px_20px_3px_rgba(102,46,255,0.7)]'></div>
                <div className='bg-purple-900  h-40 w-1 shadow-[0px_0px_20px_3px_rgba(102,46,255,0.7)]'></div>
                
            </div>
            <div className=''>
                <div className='flex flex-col '>
                    <div className='text-white font-bold ml-3 mb-10 text-lg md:text-3xl md:'>Bienvenue sur mon <span className='text-purple-600'>Portfolio</span></div>
                </div>
                <div>
                    <p className='text-white text-sm ml-3 '>Je suis un dévelopeur web Full-Stack, passionné par le design et les nouvelles technologies </p>
                </div>
            </div>
        </div>
        <div>
            <button className='py-2 px-2 bg-purple-900 text-white font-mono font-bold rounded-lg text-sm mt-5 ml-12 flex items-center gap-1 cursor-pointer'><CiSaveDown1 size={20}/> Mon CV</button>
        </div>
    </>
    )
};

export default Hero;