import './RandomNumberGenerator'
import { motion } from "framer-motion"

interface TriangleBlobProp {
    fill: String
    y: number
    x: number
    width: number
    constraintsRef: any
    rotate: number
}


function TriangleBlob(prop: TriangleBlobProp) {

    var styles = {
        position: `absolute`,
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


    return (
        <motion.div
            drag={true}
            dragConstraints={prop.constraintsRef}
            whileDrag={{ scale: 1.5 }}
            style={styles}
        />
    );
}

export default TriangleBlob;
