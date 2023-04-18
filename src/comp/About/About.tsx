import './About.css'
import { motion } from 'framer-motion'

function About() {
    return (
        <div className='AboutContainer w-full h-screen flex items-center justify-around absolute top-[900px]'>
            <div className='flex items-center justify-center h-full w-[70%] '>
                <motion.div className='bg-ccrust w-[70%] h-[60%] opacity-60 rounded-3xl'>
                </motion.div>
            </div>
            <div className='AboutBox flex flex-col justify-center items-center h-full w-[30%]'>
                <p className='font-jetbrains text-4xl text-ctext '>About</p>
                <p className='font-jetbrains text-9xl text-coverlay0'>About</p>
            </div>
        </div>
    )
}

export default About;
