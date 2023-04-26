import './RandomNumberGenerator'
import { motion } from "framer-motion"

interface CircleBlobProp {
    fill: String
    y: number
    x: number
    to_y: number
    to_x: number
    width: number
    constraintsRef: any
    rotate: number
}


function CircleBlob(prop: CircleBlobProp) {

    var styles = {
        backgroundColor: `${prop.fill}`,
        width: `${prop.width}px`,
        height: `${prop.width}px`,
        left: `${prop.x}px`,
        top: `${prop.y}px`,
        rotate: `${prop.rotate}deg`,
        borderRadius: `50%`
    }

    const motionProps = {
        animate: {
            x: [0, prop.to_x, 0],
            y: [0, prop.to_y, 0],
            transition: {
                duration: 40,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    return (
        <motion.div
            className='absolute'
            drag={true}
            dragConstraints={prop.constraintsRef}
            whileDrag={{ scale: 1.5 }}
            style={styles}
            {...motionProps}
        />
    );
}

export default CircleBlob;
