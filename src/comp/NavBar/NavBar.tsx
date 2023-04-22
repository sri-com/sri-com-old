import Contact from './Contact'
import './NavBar.css'
import Navbarlist from './NavbarList'
import NavbarLogo from './NavbarLogo'
import { motion } from "framer-motion"

function NavBar() {
    return (
        <motion.div
            className="NavBar w-full fixed h-14 top-0 bg-c-base flex items-center justify-around bg-opacity-95">
            <NavbarLogo />
            <div className='flex items-center justify-around'>
                <Navbarlist />
                <Contact />
            </div>
        </motion.div >
    )
}

export default NavBar
