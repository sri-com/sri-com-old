import './RandomNumberGenerator'
import { motion } from "framer-motion"

interface SquareBlobProp {
    fill: String
    y: number
    x: number
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


    return (
        <motion.div
            drag={true}
            dragConstraints={prop.constraintsRef}
            whileDrag={{ scale: 1.5 }}
            style={styles}
        />
    );
}

export default SquareBlob;
