import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaPhp, FaShieldAlt, FaLock, FaDownload, FaGraduationCap, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiDart, SiBootstrap, SiThreedotjs, SiTypescript, SiMysql, SiSpringboot } from 'react-icons/si';
import Particles from '../About/Particle';

function Skills() {
    const handleDownload = (certifType) => {
        const files = {
            anssi: 'ANSSI.pdf',
            cnil: 'CNIL.pdf',
            synthese: 'Synthese_BTS.pdf'  
        };
        
        window.open(files[certifType], '_blank');
    };

    
    const downloadButton = (onClick, text) => (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 
            rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px]"
        >
            <FaDownload className="text-sm" />
            <span>{text}</span>
        </button>
    );

    return ( 
        <div id="skills" className="min-h-screen mt-32 px-4 pb-16">
            <div className='flex items-start justify-center'>
                <div className="flex">
                    <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                    <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>Mes compétences</h2>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-16">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative rounded-2xl overflow-hidden cursor-pointer
                        border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                        shadow-lg backdrop-blur-[14px]
                        hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                        transform  transition-all duration-700 ease-in-out p-6">
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                                <div className="h-6 w-1 bg-purple-600 mr-2"></div>
                                Langages
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { icon: FaHtml5, name: 'HTML', color: 'hover:text-orange-500' },
                                    { icon: FaCss3Alt, name: 'CSS', color: 'hover:text-blue-500' },
                                    { icon: SiJavascript, name: 'JavaScript', color: 'hover:text-yellow-400' },
                                    { icon: SiTypescript, name: 'TypeScript', color: 'hover:text-blue-600' },
                                    { icon: FaPython, name: 'Python', color: 'hover:text-blue-400' },
                                    { icon: SiDart, name: 'Dart', color: 'hover:text-blue-300' },
                                    { icon: FaPhp, name: 'PHP', color: 'hover:text-indigo-400' },
                                    { icon: FaJava, name: 'Java', color: 'hover:text-red-500' }
                                ].map((skill, index) => (
                                    <div key={index} 
                                        className={`flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm 
                                        text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 ${skill.color}`}
                                    >
                                        <skill.icon className="text-4xl md:text-5xl mb-2" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden cursor-pointer
                        border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                        shadow-lg backdrop-blur-[14px]
                        hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                        transform  transition-all duration-700 ease-in-out p-6">
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                                <div className="h-6 w-1 bg-purple-600 mr-2"></div>
                                Frameworks & Outils
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                                {[
                                    { icon: FaReact, name: 'React', color: 'hover:text-cyan-400' },
                                    { icon: SiNextdotjs, name: 'Next.js', color: 'hover:text-gray-200' },
                                    { icon: SiTailwindcss, name: 'Tailwind', color: 'hover:text-cyan-300' },
                                    { icon: FaNodeJs, name: 'Node.js', color: 'hover:text-green-500' },
                                    { icon: SiBootstrap, name: 'Bootstrap', color: 'hover:text-purple-500' },
                                    { icon: SiThreedotjs, name: 'Three.js', color: 'hover:text-gray-300' },
                                    { icon: SiMysql, name: 'SQL', color: 'hover:text-blue-400' },
                                    { icon: SiSpringboot, name: 'Spring Boot', color: 'hover:text-green-500' }
                                ].map((skill, index) => (
                                    <div key={index} 
                                        className={`flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm 
                                        text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 ${skill.color}`}
                                    >
                                        <skill.icon className="text-4xl md:text-5xl mb-2" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-20">
                <div className='flex items-start justify-center mb-12'>
                    <div className="flex">
                        <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                        <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>Certifications</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative rounded-2xl overflow-hidden cursor-pointer
                        border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                        shadow-lg backdrop-blur-[14px]
                        hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                        transform  transition-all duration-700 ease-in-out p-6">
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-600/20 rounded-lg">
                                    <FaShieldAlt className="text-3xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">ANSSI</h3>
                                    <p className="text-gray-300 mt-1">Cybersécurité & Protection des données</p>
                                </div>
                            </div>
                            <div className="mt-6 text-gray-300">
                                <p className="text-sm leading-relaxed mb-4">
                                    Certification de l'Agence Nationale de la Sécurité des Systèmes d'Information
                                </p>
                                {downloadButton(() => handleDownload('anssi'), 'Télécharger le certificat')}
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden cursor-pointer
                        border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                        shadow-lg backdrop-blur-[14px]
                        hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                        transform  transition-all duration-700 ease-in-out p-6">
                        <Particles className="absolute inset-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                        <div className="relative z-20 p-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-600/20 rounded-lg">
                                    <FaLock className="text-3xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">CNIL</h3>
                                    <p className="text-gray-300 mt-1">Protection des Données Personnelles</p>
                                </div>
                            </div>
                            <div className="mt-6 text-gray-300">
                                <p className="text-sm leading-relaxed mb-4">
                                    Certification de la Commission Nationale de l'Informatique et des Libertés
                                </p>
                                {downloadButton(() => handleDownload('cnil'), 'Télécharger le certificat')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-20">
                <div className="relative rounded-2xl overflow-hidden cursor-pointer
                    border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                    shadow-lg backdrop-blur-[14px]
                    hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                    transform  transition-all duration-700 ease-in-out p-6">
                    <Particles className="absolute inset-0 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                    <div className="relative z-20 p-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-purple-600/20 rounded-lg">
                                <FaGraduationCap className="text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Fiche de Synthèse BTS SIO</h3>
                                <p className="text-gray-300 mt-1">Résumé de mon parcours et compétences acquises</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                Cette fiche synthétise l'ensemble de mes apprentissages, projets et compétences développées durant mon BTS Services Informatiques aux Organisations.
                            </p>
                            {downloadButton(() => handleDownload('synthese'), 'Télécharger la fiche de synthèse')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;