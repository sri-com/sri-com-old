import './Blog.css'
import { motion } from 'framer-motion'

function Blogs() {
    return (
        <div className='bg-c-crust w-full h-[130%] absolute top-[2800px] opacity-60 border-4 border-c-text rounded-3xl'>
            <motion.div className='bg-c-text w-1 h-1 opacity-100'></motion.div>
        </div>
    )
}

export default Blogs
