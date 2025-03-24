import { IoMdMail, IoMdSend } from "react-icons/io";
import { motion } from 'framer-motion';
import Particles from '../About/Particle';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'envoi du formulaire à implémenter
    };

    return (
        <div className="min-h-screen mt-32 px-4 pb-16">
            <div className='flex items-start justify-center'>
                <div className="flex">
                    <div className='h-6 md:h-7 lg:h-8 xl:h-9 bg-purple-600 w-1'></div>
                    <h2 className='font-bold text-white ml-2 md:text-xl lg:text-2xl xl:text-3xl'>Contact</h2>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glassmorph-cards p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent 
                    backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all 
                    duration-300 relative overflow-hidden"
                >
                    <Particles className="absolute inset-0 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="p-3 bg-purple-600/20 rounded-lg">
                                <IoMdMail className="text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Envoyez-moi un message</h3>
                                <p className="text-gray-300 mt-1">Je vous répondrai dans les plus brefs délais</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="block text-white mb-2 text-sm">Nom</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 
                                        text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 
                                        transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white mb-2 text-sm">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 
                                        text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 
                                        transition-all duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-white mb-2 text-sm">Sujet</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 
                                    text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 
                                    transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2 text-sm">Message</label>
                                <textarea 
                                    rows="5" 
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 
                                    text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 
                                    transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/40 
                                rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px] w-fit"
                            >
                                <IoMdSend className="text-sm" />
                                <span>Envoyer</span>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
