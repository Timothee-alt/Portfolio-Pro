import './Hero.css';
import Nav from '../../Components/HamburgerMenu/HamburgerMenu';
import { FaGithub, FaDownload } from "react-icons/fa";

function Hero() {
    const handleDownloadCV = () => {
        window.open('/CV.pdf', '_blank');
    };

    return (
    <>
        <div>
            <Nav />
        </div>
        <div id="hero" className='flex justify-start relative ml-5 mt-16 md:justify-center md:mr-60 md:mt-40 lg:justify-center lg:mr-96 lg:mt-40 xl:h-screen'>
            <div className='flex flex-col items-center animate-pulse'> 
                <div className='bg-purple-900  rounded-full h-5 w-5 shadow-[0px_0px_20px_3px_rgba(102,46,255,0.7)]'></div>
                <div className='bg-purple-900  h-40 w-1 shadow-[0px_0px_20px_3px_rgba(102,46,255,0.7)]'></div>   
            </div>
            <div className=''>
                <div className='flex flex-col '>
                    <div className='text-white font-bold ml-3 mb-10 text-lg md:text-3xl md:'>Bienvenue sur mon <span className='text-purple-600'>Portfolio</span></div>
                </div>
                <div>
                    <p className='text-white text-sm xl:text-lg ml-3 '>Je suis étudiant en BTS SIO option SLAM, passionné par le design et les nouvelles technologies </p>
                    <div className='flex ml-4 md:ml-50 lg:ml-6 gap-5 mt-10 items-center'>
                        <button 
                            onClick={handleDownloadCV}
                            className="px-4 rounded-full py-2 font-medium bg-purple-600 text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                        >
                            Mon CV
                        </button>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="text-white cursor-pointer hover:text-purple-600" />
                        </a>
                    </div>
                
                </div>
            </div>
        </div>
        
        
    </>
    )
};

export default Hero;