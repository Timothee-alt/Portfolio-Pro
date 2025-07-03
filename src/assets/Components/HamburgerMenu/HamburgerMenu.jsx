import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const Nav = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const[hovered, setHovered] = useState(false)

    
    const sections = [
        { name: "Accueil", id: "hero" },
        { name: "À Propos", id: "about" },
        { name: "Compétences", id: "skills" },
        { name: "Projets", id: "project" },
        { name: "Contact", id: "contact" }
    ];

    const FlipLink = ({ children, to, className }) => (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap cursor-pointer"
        >
            <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-100} 
                duration={500} 
                className={`relative text-2xl text-white hover-underline-animation ${className}`}
                onClick={() => setClick(false)}
            >
                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                    }}
                >
                    {children}
                </motion.div>
                <motion.div
                    className="absolute inset-0"
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: "0" },
                    }}
                >
                    {children}
                </motion.div>
            </Link>
        </motion.div>
    );

    const MobileMenu = () => (
        <div
            className={`lg:hidden block fixed top-0 left-0 m-0 w-full h-full glassmorph transition-transform duration-300 z-40 ${
                click ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <button
                className="absolute top-4 right-6 text-3xl text-white z-50"
                onClick={handleClick}
            >
                <FaTimes />
            </button>
            <ul className="h-full flex flex-col justify-center items-center">
                {sections.map((section) => (
                    <li className="my-4 py-4" key={section.id}>
                        <FlipLink to={section.id}>{section.name}</FlipLink>
                    </li>
                ))}
            </ul>
        </div>
    );

    const DesktopMenu = () => (
        <div className="flex">
            <ul className="flex gap-10 lg:mr-12 md:mr-10">
                {sections.slice(0, -1).map((section) => (
                    <motion.div
                        key={section.id}
                        className="flex flex-col"
                        whileHover="hovered"
                        initial="initial"
                    >
                        <FlipLink to={section.id} className="lg:text-base md:text-sm font-bold">
                            {section.name}
                        </FlipLink>
                        <motion.div
                            className="border-t-4 border-purple-600 rounded-xl"
                            variants={{
                                initial: { width: "0%" },
                                hovered: { width: "100%" },
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </ul>
        </div>
    );


    return (
        <nav>
            <div className="h-10vh flex justify-between items-center z-50 text-white lg:py-5 py-4">
                <div className="flex items-center flex-1">
                    <span className="lg:text-base md:text-base font-bold ml-5">Mon Portfolio</span>
                </div>
                <div className="hidden md:block">
                    <DesktopMenu />
                </div>
                <div className="md:hidden">
                    <button className="text-3xl z-50 mr-5" onClick={handleClick}>
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
            </div>
            <MobileMenu />
        </nav>
    );
};

export default Nav;
