import './About.css';
import logoGreta from './logogreta.png';
import Particles from './Particle';
import { IoMdSchool, IoMdBusiness, IoMdCode, IoMdTrendingUp } from "react-icons/io";
import { motion } from 'framer-motion';

function About() {
    return (
        <div id="about" className="min-h-screen mt-32 px-4 pb-16">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex items-start justify-center'
            >
                <div className="flex">
                    <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                    <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>À Propos</h2>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto mt-16">
                <div className='grid gap-6 md:grid-cols-4'>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="glassmorph-cards p-6 md:col-span-3 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Le BTS SIO</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Le <span className='text-gradient'>BTS SIO</span> (Services Informatiques aux Organisation) est un diplôme qui forme des professionnels capables de participer à la production et à l'adaptation de solutions techniques d'infrastructure ou applicatives.
                            </p>
                            <a
                                href='https://greta-bretagne.ac-rennes.fr/portail/web/notre-reseau/greta-cfa-bretagne-sud/agence-de-vannes/stages/bts-services-informatiques-aux' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 
                                rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px] w-fit"
                            >
                                <IoMdSchool className="text-sm" />
                                <span>En savoir plus</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glassmorph-cards p-6 md:col-span-1 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-purple-600/20 rounded-lg mb-4">
                                    <IoMdCode className="text-3xl text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Option SLAM</h3>
                                <p className="text-gray-300 text-sm">
                                    Solutions Logicielles et Applications Métiers.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glassmorph-cards p-6 md:col-span-1 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-purple-600/20 rounded-lg mb-4">
                                    <IoMdTrendingUp className="text-3xl text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Objectifs</h3>
                                <p className="text-gray-300 text-sm">
                                    Devenir développeur Full Stack et créer des applications web.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="glassmorph-cards p-6 md:col-span-3 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Le GRETA</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Le <span className='text-gradient'>GRETA</span>, organisme de formation continue, est un partenaire clé dans ce parcours, offrant des ressources et un soutien précieux pour développer mes compétences professionnelles.
                            </p>
                            <a
                                href='https://greta-bretagne.ac-rennes.fr/portail/web/notre-reseau/greta-cfa-des-cotes-d-armor' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 
                                rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px] w-fit"
                            >
                                <IoMdBusiness className="text-sm" />
                                <span>En savoir plus</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;