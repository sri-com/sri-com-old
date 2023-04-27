import './Blog.css'
import { motion } from 'framer-motion'

function Blogs() {
    return (
        <div className='BlogContainer flex flex-col items-center'>
            <div className='BlogBox flex flex-col justify-center items-center h-full w-[30%] absolute top-[calc(260vh)]'>
                <p className='font-jetbrains text-4xl text-c-text '>Blogs</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>Blogs</p>
            </div>

            <div className='bg-c-crust w-[98%] h-[130%] absolute opacity-60 border-4 border-c-text rounded-3xl top-[calc(260vh_+_75%)]'>
                <motion.div className='bg-c-text w-1 h-1 opacity-100'></motion.div>
            </div>
        </div>
    )
}

export default Blogs
