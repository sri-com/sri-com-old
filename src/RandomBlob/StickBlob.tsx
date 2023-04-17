import { motion } from "framer-motion"

interface StickBlobProp {
    fill: String
    y: number
    x: number
    width: number
    height: number
    constraintsRef: any
    rotate: number
}


function StickBlob(prop: StickBlobProp) {

    var styles = {
        position: `absolute`,
        backgroundColor: `${prop.fill}`,
        width: `${prop.width}px`,
        height: `${prop.height}px`,
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

export default StickBlob;
