import React from 'react'
import { motion } from "framer-motion";

function NavbarMobileContents() {
    return (
        <motion.div
        animate={{ height: '100%' }}
        exit={{ height: '0%' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className='navbar-mobile-contents'
        >
            <ul>
                <li><p>Destinations</p></li>
                <li><p>Hotels</p></li>
                <li><p>Flights</p></li>
                <li><p>Bookings</p></li>
                <li><p>Login</p></li>
                <li><p>Signup</p></li>
                <li><p>Language</p></li>
            </ul>
        </motion.div>
    )
}

export default NavbarMobileContents
