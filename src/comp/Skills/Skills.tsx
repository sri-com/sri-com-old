import './Skills.css'
import { motion } from 'framer-motion'

function Skills() {
    return (
        <div className='SkillsContainer w-full h-screen flex items-center justify-around absolute top-[1800px]'>
            <div className='SkillsBox flex flex-col justify-center items-center h-full w-[30%]'>
                <p className='font-jetbrains text-4xl text-ctext '>Skills</p>
                <p className='font-jetbrains text-9xl text-coverlay0'>Skills</p>
            </div>
            <div className='flex items-center justify-center h-full w-[70%] '>
                <motion.div className='bg-ccrust w-[70%] h-[60%] opacity-60 rounded-3xl border-4 border-ctext' whileHover={{ scale: 1.2 }}>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills;
