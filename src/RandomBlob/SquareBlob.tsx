import './RandomNumberGenerator'
import { motion } from "framer-motion"

interface SquareBlobProp {
    fill: String
    y: number
    x: number
    to_y: number
    to_x: number
    width: number
    constraintsRef: any
    rotate: number
}


function SquareBlob(prop: SquareBlobProp) {

    var styles = {
        position: `absolute`,
        backgroundColor: `${prop.fill}`,
        width: `${prop.width}px`,
        height: `${prop.width}px`,
        left: `${prop.x}px`,
        top: `${prop.y}px`,
        rotate: `${prop.rotate}deg`,
    }

    const motionProps = {
        animate: {
            x: [0, prop.to_x, 0, -1 * prop.to_x, 0],
            y: [0, prop.to_y, 0, -1 * prop.to_x, 0],
            rotate: [prop.rotate, 0, -1 * prop.rotate],
            transition: {
                duration: 80,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    return (
        <motion.div
            drag={true}
            dragConstraints={prop.constraintsRef}
            whileDrag={{ scale: 1.5 }}
            style={styles}
            {...motionProps}
        />
    );
}

export default SquareBlob;
