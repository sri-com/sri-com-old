import './RandomNumberGenerator';
import getRandomeNumBtw from './RandomNumberGenerator';
import SquareBlob from './SquareBlob';
import TriangleBlob from './TriangleBlob';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import StickBlob from './StickBlob';
import CircleBlob from './CircleBlob';

interface RandomBlobProp {
    num_of_blob: number
    fill_color_scheme: Array<string>
    canvas_width: number
    canvas_height: number
}


function RandomBlob(prop: RandomBlobProp) {
    const constraintsRef = useRef(null)

    let BlobArr: any[] = [];
    for (let i = 0; i < prop.num_of_blob; i++) {
        BlobArr.push(<SquareBlob
            width={getRandomeNumBtw(30, 90)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={getRandomeNumBtw(20, prop.canvas_width)}
            y={getRandomeNumBtw(30, prop.canvas_height)}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)
        BlobArr.push(<TriangleBlob
            width={getRandomeNumBtw(30, 90)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={getRandomeNumBtw(20, prop.canvas_width)}
            y={getRandomeNumBtw(30, prop.canvas_height)}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)
        BlobArr.push(<StickBlob
            width={getRandomeNumBtw(2, 4)}
            height={getRandomeNumBtw(80, 200)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={getRandomeNumBtw(20, prop.canvas_width)}
            y={getRandomeNumBtw(30, prop.canvas_height)}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)
        BlobArr.push(<CircleBlob
            width={getRandomeNumBtw(30, 200)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={getRandomeNumBtw(20, prop.canvas_width)}
            y={getRandomeNumBtw(30, prop.canvas_height)}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)
    }

    return (

        <div className='RandomBlobContainer w-full h-full'>
            <motion.div ref={constraintsRef} className="w-full h-full">
                {BlobArr}
            </motion.div>
        </div>

    )
}

export default RandomBlob;
