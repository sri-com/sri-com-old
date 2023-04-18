import { motion } from "framer-motion"

interface StickBlobProp {
    fill: String
    y: number
    x: number
    to_y: number
    to_x: number
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

    const motionProps = {
        animate: {
            x: [0, prop.to_x, 0],
            y: [0, prop.to_y, 0],
            transition: {
                duration: 50,
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

export default StickBlob;
