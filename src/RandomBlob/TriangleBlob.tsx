import './RandomNumberGenerator'
import { motion } from "framer-motion"

interface TriangleBlobProp {
    fill: String
    y: number
    x: number
    to_y: number
    to_x: number
    width: number
    constraintsRef: any
    rotate: number
}


function TriangleBlob(prop: TriangleBlobProp) {

    var styles = {
        backgroundColor: `transparent`,
        left: `${prop.x}px`,
        top: `${prop.y}px`,
        width: 0,
        height: 0,
        borderLeft: `${prop.width}px solid transparent`,
        borderRight: `${prop.width}px solid transparent`,
        borderBottom: `${prop.width}px solid ${prop.fill}`,
        rotate: `${prop.rotate}deg`
    }

    const motionProps = {
        animate: {
            x: [0, prop.to_x, 0],
            y: [0, prop.to_y, 0],
            transition: {
                duration: 70,
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

export default TriangleBlob;
