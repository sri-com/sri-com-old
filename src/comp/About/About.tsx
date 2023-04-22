import './About.css'
import { motion } from 'framer-motion'

function About() {


    return (
        <section className='AboutContainer w-screen h-screen flex items-center justify-around absolute top-[100vh]'>
            <div className='AboutContent flex items-center justify-center h-full w-[70%] '>
                <motion.div className='AboutMotionDiv bg-c-crust opacity-60 rounded-3xl border-4 border-c-text' whileHover={{ scale: 1.2 }}>

                </motion.div>
            </div>
            <div className='AboutBox flex flex-col justify-center items-center h-full w-[30%]'>
                <p className='font-jetbrains text-4xl text-c-text '>About</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>About</p>
            </div>
        </section>
    )
}

export default About;
