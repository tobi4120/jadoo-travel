import React, { useState, useEffect, forwardRef } from 'react'
import '../../static/styles/Navbar.scss';
import jadooLogo from "../../static/Jadoo_logo.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from "framer-motion";
import NavbarMobileContents from './navbar_mobile_contents';

const Navbar = forwardRef((props, appDivRef) => {
    const [language, setLanguage] = useState("EN");
    const [languageDropdowOpen, setLanguageDropdownOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("transparent");
    const [navbarMobileShown, setNavbarMobileShown] = useState(false);

    useEffect(() => {
        if (appDivRef.current) {
            appDivRef.current.addEventListener('scroll', handleScroll);

            return () => {
                appDivRef.current.removeEventListener('scroll', handleScroll);
            };
        }
    }, [])

    const handleScroll = () => {
        if (appDivRef.current && appDivRef.current.scrollTop !== 0) {
            setNavbarBackground("white");
        } else {
            setNavbarBackground("transparent");
        }
    };

    return (
        <div style={{ 'margin-top': '-150px' }}>
            <div className='Navbar' style={{ backgroundColor: navbarBackground }}>
                <div className='logo'><img src={jadooLogo} /></div>
                <ul className='pages'>
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                </ul>
                <ul className='general'>
                    <li>Login</li>
                    <li className='sign-up'>Sign up</li>
                    <li className='language'>

                        <div className='select-btn' onClick={() => setLanguageDropdownOpen(!languageDropdowOpen)} >
                            {language}
                            <span 
                                className='arrow'
                                style={{ transform: `rotate(${languageDropdowOpen? 270 : 90}deg)` }}>
                                <ChevronRightIcon />
                            </span>
                        </div>

                        {/* Options */}
                        <AnimatePresence>
                            {languageDropdowOpen &&
                                <motion.div
                                    onClick={() => { setLanguageDropdownOpen(false); setLanguage(language === "EN"? "FR" : "EN"); }}
                                    className='language-options'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    {language === "EN"? "FR" : "EN"}
                                </motion.div>
                            }
                        </AnimatePresence>
                    </li>
                </ul>
            </div>
            
            <div className='navbar-mobile' style={{ backgroundColor: navbarBackground }}>
                <div className='logo'><img src={jadooLogo} /></div>

                <div
                    className="mobile-menu-toggle"
                    onClick={() => setNavbarMobileShown(!navbarMobileShown)}
                >
                    <motion.div
                    className="bar top"
                    variants={barVariants}
                    animate={navbarMobileShown ? "openTop" : "closed"}
                    />
                    <motion.div
                    className="bar middle"
                    variants={barVariants}
                    animate={navbarMobileShown ? "openMiddle" : "closed"}
                    />
                    <motion.div
                    className="bar bottom"
                    variants={barVariants}
                    animate={navbarMobileShown ? "openBottom" : "closed"}
                    />
                </div>
            </div>

            <AnimatePresence>
                {navbarMobileShown && (
                    <NavbarMobileContents />
                )}
            </AnimatePresence>
        </div>
    )
});
export default Navbar

const barVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.01 },
    },
    openTop: {
      rotate: 45,
      y: 8.5,
      transition: { duration: 0.01 },
    },
    openMiddle: {
      opacity: 0,
      transition: { duration: 0.01 },
    },
    openBottom: {
      rotate: -45,
      y: -8.5,
      transition: { duration: 0.01 },
    },
};
