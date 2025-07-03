import { IoMdMail, IoMdSend } from "react-icons/io";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Particles from '../About/Particle';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    // Laisse Netlify gérer la soumission normale du formulaire
    // La soumission va déclencher un POST classique et rechargera la page
    // Tu peux ici afficher un message après soumission ou faire un redirect personnalisé si tu veux
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
          className="relative rounded-2xl overflow-hidden cursor-pointer
          border border-purple-600/20 bg-gradient-to-br from-purple-900/60 to-transparent
          shadow-lg backdrop-blur-[14px]
          hover:shadow-[0_0_25px_6px_rgba(102,46,255,0.7)] hover:border-purple-600/70
          transition-all duration-700 ease-in-out p-6"
        >
          <Particles className="absolute inset-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
          <div className="relative z-20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <IoMdMail className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Envoyez-moi un message</h3>
                <p className="text-gray-300 mt-1">Je vous répondrai dans les plus brefs délais</p>
              </div>
            </div>

            {/* Message de statut */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-600/20 border border-green-600/30 text-green-300' 
                  : 'bg-red-600/20 border border-red-600/30 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Champ caché obligatoire pour Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot anti-spam */}
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-white mb-2 text-sm">Nom</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20
                    text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                    transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20
                    text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                    transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Sujet</label>
                <input
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20
                  text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                  transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20
                  text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                  transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/40
                rounded-lg text-white transition-all duration-300 hover:transform hover:translate-y-[-2px] w-fit
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                <IoMdSend className="text-sm" />
                <span>{isSubmitting ? 'Envoi...' : 'Envoyer'}</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
