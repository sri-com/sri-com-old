import './Blog.css'
import { motion } from 'framer-motion'

function Blogs() {
    return (
        <div className='bg-ccrust w-full h-[130%] absolute top-[2800px] opacity-60 border-4 border-ctext rounded-3xl'>
            <motion.div className='bg-ctext w-1 h-1 opacity-100'></motion.div>
        </div>
    )
}

export default Blogs
