import { FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiBootstrap, SiSpringboot, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import Particles from '../About/Particle';

function Project() {
    const projects = [
        {
            title: "PANT",
            description: "Application web de livraison de nourriture développée dans le cadre de ma formation. Interface moderne et intuitive permettant aux utilisateurs de commander facilement leurs plats préférés.",
            technologies: [
                { icon: FaHtml5, name: "HTML", color: 'hover:text-orange-500' },
                { icon: FaCss3Alt, name: "CSS", color: 'hover:text-blue-500' },
                { icon: SiBootstrap, name: "Bootstrap", color: 'hover:text-purple-500' },
                { icon: SiSpringboot, name: "Spring Boot", color: 'hover:text-green-500' },
                { icon: SiMysql, name: "MySQL", color: 'hover:text-blue-400' }
            ],
            type: "Projet de formation",
            github: "https://github.com/votre-lien-pant",
            imageUrl: "/images/pant-bg.jpg",
        },
        {
            title: "VINIUP",
            description: "Site e-commerce de vente de vin développé lors de mon stage. Plateforme complète avec connexion/inscription keycloack, gestion des stocks, panier, catalogue et interface administrative.",
            technologies: [
                { icon: SiNextdotjs, name: "Next.js", color: 'hover:text-gray-200' },
                { icon: SiSpringboot, name: "Spring Boot", color: 'hover:text-green-500' },
                { icon: SiTailwindcss, name: "Tailwind", color: 'hover:text-cyan-400' }
            ],
            type: "Projet de stage",
            github: "https://github.com/votre-lien-viniup",
            imageUrl: "/images/viniup-bg.jpg",
        },
        {
            title: "ARKEO (en cours)",
            description: "Un véritable musée virtuel que j'ai conçu par passion pour l'histoire et l'archéologie. Cette bibliothèque interactive permet d'explorer et de manipuler en 3D des artéfacts historiques, rendant notre patrimoine culturel accessible à tous. Une expérience immersive qui fait le pont entre passé et présent grâce aux technologies modernes.",
            technologies: [
                { icon: SiNextdotjs, name: "Next.js", color: 'hover:text-gray-200' },
                { icon: SiTailwindcss, name: "Tailwind", color: 'hover:text-cyan-400' },
            ],
            type: "Projet personnel",
            github: "https://github.com/Timothee-alt/arkeo.git",
            imageUrl: "/images/arkeo-bg.jpg",
        }
    ];

    return (
        <div id="project" className="min-h-screen mt-32 px-4 pb-16">
            <div className='flex items-start justify-center'>
                <div className="flex">
                    <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                    <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>Mes Projets</h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16">
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative rounded-2xl overflow-hidden cursor-pointer
                                border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
                                shadow-lg backdrop-blur-[14px]
                                hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
                                transition-all duration-700 ease-in-out p-6"
                        >
                            <Particles className="absolute inset-0 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                            <div className="relative z-20 flex flex-col h-full justify-between text-white">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <span className="text-purple-400 text-sm px-3 py-1 rounded-full border border-purple-400/30 select-none">
                                            {project.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mt-6 mb-3">Technologies utilisées :</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <div 
                                                key={techIndex} 
                                                className={`flex items-center space-x-2 text-white transition-colors duration-300 ${tech.color} select-none`}
                                            >
                                                <tech.icon className="text-xl" />
                                                <span className="text-sm">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-5 py-2 mt-6 rounded-full bg-purple-600/30 
                                            hover:bg-purple-600/70 text-white font-semibold transition duration-300 select-none shadow-md
                                            hover:shadow-purple-600"
                                        aria-label={`Voir le code source GitHub du projet ${project.title}`}
                                    >
                                        <FaGithub className="text-lg" />
                                        <span>Voir le code</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
