import './RandomNumberGenerator';
import getRandomeNumBtw from './RandomNumberGenerator';
import SquareBlob from './SquareBlob';
import TriangleBlob from './TriangleBlob';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import StickBlob from './StickBlob';
import CircleBlob from './CircleBlob';
import BgTriangleBlob from './BgTriangleBlob';

interface RandomBlobProp {
    num_of_blob: number
    fill_color_scheme: Array<string>
    canvas_width: number
    canvas_height: number
}


function get_random_displacement(x: number, max_x: number, min_x: number) {
    let val = getRandomeNumBtw(-80, 80)
    if (x + val > max_x - 35)
        return max_x - x
    else if (x + val < min_x + 35)
        return x - min_x
    return val
}

function RandomBlob(prop: RandomBlobProp) {
    const constraintsRef = useRef(null)
    let BlobArr: any[] = [];
    let pad_val = 90;
    for (let i = 0; i < prop.num_of_blob; i++) {
        let x = getRandomeNumBtw(pad_val, prop.canvas_width - pad_val);
        let to_x = get_random_displacement(x, prop.canvas_width, 0)
        let y = getRandomeNumBtw(pad_val, prop.canvas_height - pad_val);
        let to_y = get_random_displacement(y, prop.canvas_height, 0)
        BlobArr.push(<SquareBlob
            width={getRandomeNumBtw(30, 70)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={x}
            y={y}
            to_x={to_x}
            to_y={to_y}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)

        x = getRandomeNumBtw(pad_val, prop.canvas_width - pad_val);
        to_x = get_random_displacement(x, prop.canvas_width, 0)
        y = getRandomeNumBtw(pad_val, prop.canvas_height - pad_val);
        to_y = get_random_displacement(y, prop.canvas_height, 0)
        BlobArr.push(<TriangleBlob
            width={getRandomeNumBtw(30, 70)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={x}
            y={y}
            to_x={to_x}
            to_y={to_y}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)


        x = getRandomeNumBtw(pad_val, prop.canvas_width - pad_val);
        to_x = get_random_displacement(x, prop.canvas_width, 0)
        y = getRandomeNumBtw(pad_val, prop.canvas_height - pad_val);
        to_y = get_random_displacement(y, prop.canvas_height, 0)
        BlobArr.push(<StickBlob
            width={getRandomeNumBtw(2, 4)}
            height={getRandomeNumBtw(80, 150)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={x}
            y={y}
            to_x={to_x}
            to_y={to_y}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)


        x = getRandomeNumBtw(pad_val, prop.canvas_width - pad_val);
        to_x = get_random_displacement(x, prop.canvas_width, 0)
        y = getRandomeNumBtw(pad_val, prop.canvas_height - pad_val);
        to_y = get_random_displacement(y, prop.canvas_height, 0)
        BlobArr.push(<CircleBlob
            width={getRandomeNumBtw(30, 150)}
            fill={prop.fill_color_scheme[getRandomeNumBtw(0, prop.fill_color_scheme.length)]}
            x={x}
            y={y}
            to_x={to_x}
            to_y={to_y}
            rotate={getRandomeNumBtw(-360, 360)}
            constraintsRef={constraintsRef} />)
    }
    return (

        <div className='RandomBlobContainer w-full h-full'>
            <BgTriangleBlob top={100} left={50} />
            <BgTriangleBlob top={1800} left={300} />
            <motion.div ref={constraintsRef} className="w-full h-full">
                {BlobArr}
            </motion.div>
        </div>

    )
}

export default RandomBlob;
