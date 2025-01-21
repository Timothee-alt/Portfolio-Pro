import './About.css';
import logoGreta from './logogreta.png';
import Particles from './Particle';
import { IoMdSchool } from "react-icons/io";

function About() {
    return (
    <div className="xl:h-screen lg:mt-36">
        <div className='flex items-start justify-center mt-20'>
            <div className="flex">
                <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>À Propos</h2>
            </div>
        </div>
        <div className='grid grid-rows-4 grid-cols-4 mt-16 ml-6 mr-6 xl:ml-32 xl:mr-32 gap-5'>
            <div className="glassmorph-cards bg-purple-box flex flex-col z-1 py-32 xl:py-64 col-span-4 lg:col-span-3 rounded-xl relative overflow-hidden">
                <Particles className="absolute inset-0 pointer-events-none" />
                <h1 className="text-white font-bold -mt-28 xl:-mt-60 text-center 2xl:text-3xl">Le BTS SIO</h1>
                <p className="text-white pt-12 mx-4 xl:mx-6 lg:pt-6 2xl:text-2xl">
                    "Le <span className='text-gradient'>BTS SIO</span> (Services Informatiques aux Organisation) est un diplôme qui forme des professionnels capables de participer à la production et à l'adaptation de solutions techniques d'infrastructure ou applicatives."
                </p>
                <button className="h-12 w-12 bg-purple-900 rounded-full absolute bottom-4 left-1/2 transform -translate-x-1/2">
                </button>
            </div>
            <div className='glassmorph-cards col-span-4 lg:col-span-1 rounded-xl'>
            <Particles className="absolute inset-0 pointer-events-none" />
            </div>
            <div className='glassmorph-cards col-span-4 lg:col-span-1 rounded-xl'>
                <Particles className="absolute inset-0 pointer-events-none" />
            </div>
            <div className='glassmorph-cards col-span-4 lg:col-span-3 rounded-xl'>
                <Particles className="absolute inset-0 pointer-events-none" />
                <h1 className='text-white font-bold text-center mt-4 2xl:text-3xl'>Le GRETA</h1>
                <p className='text-white mx-4 pt-12 lg:pt-6 2xl:text-2xl'>
                Le<span className='text-gradient'> GRETA</span>, organisme de formation continue, est un partenaire clé dans ce parcours, offrant des ressources et un soutien précieux pour développer mes compétences professionnelles.
                </p>
            </div>
        </div>
    </div>


    )
};

export default About;