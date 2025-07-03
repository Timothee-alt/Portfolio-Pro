import './About.css';
import Particles from './Particle';
import { IoMdCode, IoMdTrendingUp } from "react-icons/io";
import { FaLightbulb, FaHandshake, FaSearch, FaMountain } from "react-icons/fa";
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
                <div className='grid gap-6 md:grid-cols-2 '>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-2xl overflow-hidden cursor-pointer
                            border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                            shadow-lg backdrop-blur-[14px]
                            hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                            transform hover:scale-[1.04] transition-all duration-700 ease-in-out p-6 "
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 transform hover:scale-[1.04]
                        transition-all duration-700 ease-in-out"></div>
                        <div className="relative z-20 transform hover:scale-[1.04]
                        transition-all duration-700 ease-in-out">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Développeur Full Stack</h3>
                            <p className="text-white leading-relaxed mb-6">
                                Après l'obtention de mon <span className="text-gradient">BTS Services Informatiques aux Organisations</span>, je me suis pleinement consacré au développement web et à la conception d'applications. Fort de plusieurs projets concrets, je maîtrise les technologies modernes et je cherche constamment à innover.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden cursor-pointer
                            border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                            shadow-lg backdrop-blur-[14px]
                            hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                            transform hover:scale-[1.04] transition-all duration-700 ease-in-out p-6"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 flex flex-col items-center text-center">
                            <div className="p-3 bg-purple-600/20 rounded-lg mb-4">
                                <IoMdCode className="text-3xl text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Formation</h3>
                            <p className="text-white text-sm">
                                BTS Services Informatiques aux Organisations (SIO) – Option SLAM
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative rounded-2xl overflow-hidden cursor-pointer
                            border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                            shadow-lg backdrop-blur-[14px]
                            hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                            transform hover:scale-[1.04] transition-all duration-700 ease-in-out p-6"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 flex flex-col items-center text-center">
                            <div className="p-3 bg-purple-600/20 rounded-lg mb-4">
                                <IoMdTrendingUp className="text-3xl text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">Objectifs</h3>
                            <p className="text-white text-sm">
                                Devenir développeur Full Stack et créer des applications web.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative rounded-2xl overflow-hidden cursor-pointer
                            border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                            shadow-lg backdrop-blur-[14px]
                            hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                            transform hover:scale-[1.04] transition-all duration-700 ease-in-out p-6"
                    >
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Valeurs professionnelles</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <FaSearch className="text-3xl md:text-4xl text-purple-400 mb-2" />
                                    <span className="text-white text-base md:text-lg text-center">Curiosité</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaHandshake className="text-3xl md:text-4xl text-purple-400 mb-2" />
                                    <span className="text-white text-base md:text-lg text-center">Collaboration</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaMountain className="text-3xl md:text-4xl text-purple-400 mb-2" />
                                    <span className="text-white text-base md:text-lg text-center">Persévérance</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaLightbulb className="text-3xl md:text-4xl text-purple-400 mb-2" />
                                    <span className="text-white text-base md:text-lg text-center">Créativité</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;