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
            github: "https://github.com/votre-lien-pant"
        },
        {
            title: "VINIUP",
            description: "Site e-commerce de vente de vin développé lors de mon stage. Plateforme complète avec connexion/inscriptio keycloack, gestion des stocks, panier, catalogue et interface administrative.",
            technologies: [
                { icon: SiNextdotjs, name: "Next.js", color: 'hover:text-gray-200' },
                { icon: SiSpringboot, name: "Spring Boot", color: 'hover:text-green-500' },
                { icon: SiTailwindcss, name: "Tailwind", color: 'hover:text-cyan-400' }
            ],
            type: "Projet de stage",
            github: "https://github.com/votre-lien-viniup"
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
                            className="glassmorph-cards p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent 
                            backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 
                            transition-all duration-300 relative overflow-hidden group"
                        >
                            <Particles className="absolute inset-0 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <span className="text-purple-400 text-sm px-3 py-1 rounded-full border border-purple-400/30">
                                        {project.type}
                                    </span>
                                </div>
                                
                                <p className="text-gray-300 mt-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-6">
                                    <h4 className="text-white font-semibold mb-3">Technologies utilisées :</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} 
                                                className={`flex items-center space-x-2 text-white ${tech.color} transition-colors`}
                                            >
                                                <tech.icon className="text-xl" />
                                                <span className="text-sm">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/40 
                                    rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px] w-fit mt-6"
                                >
                                    <FaGithub className="text-sm" />
                                    <span>Voir le code</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
