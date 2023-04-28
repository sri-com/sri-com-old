import Contact from './Contact'
import Navbarlist from './NavbarList'
import NavbarLogo from './NavbarLogo'
import { motion } from "framer-motion"
import ThemeChanger from './ThemeChanger'

interface NavBarProp {
    changeTheme: any
}

function NavBar(prop: NavBarProp) {
    return (
        <motion.div
            className="NavBar w-full fixed h-14 top-0 bg-c-base flex items-center justify-around bg-opacity-95">
            <NavbarLogo />
            <div className='flex items-center justify-around'>
                <Navbarlist />
                <Contact />
                <ThemeChanger themeChanger={prop.changeTheme} />
            </div>
        </motion.div >
    )
}

export default NavBar
