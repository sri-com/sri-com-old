interface BgTriangleBlobProp {
    top: number
    left: number
}

function BgTriangleBlob(prop: BgTriangleBlobProp) {
    let styles = {
        top: `${prop.top}px`,
        left: `${prop.left}px`,
        fill: "fill-c-crust"
    }

    return (
        <div className="BgTriangle absolute w-[80%] flex justify-around" style={styles}>
            <svg
                className='BgTriangleLeft'
                width="1000px"
                height="1000px"
                viewBox="0 0 1200 1200"
                version="1.1"
                id="svg225"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    className='fill-c-crust'
                    id="Selection"
                    stroke="#11111b"
                    stroke-width="1"
                    d="m 27,27 c 0,0 18,8.69 18,8.69 0,0 62,30.05 62,30.05 0,0 157,76 157,76 0,0 611,295.52 611,295.52 0,0 190,92 190,92 0,0 62,30 62,30 0,0 45,21.74 45,21.74 0,0 0,2 0,2 0,0 -33,16.75 -33,16.75 0,0 -69,34.99 -69,34.99 0,0 -59,29.52 -
59,29.52 0,0 -81,41.49 -81,41.49 0,0 -276,139.99 -276,139.99 0,0 -128,64.52 -128,64.52 0,0 -177,89.99 -177,89.99 0,0 -223,113 -223,113 0,0 -67,34 -67,34 0,0 -31,14.75 -31,14.75 0,0 0,-496 0,-496 0,0 0,-165 0,-165 0,0 0,-83 0,-83 0,0 -1
,-15 -1,-15 0,0 0,-376 0,-376 z" />
                <path
                    id="Unnamed copy"
                    className='fill-c-crust'
                    stroke="#11111bc"
                    stroke-width="1"
                    d="m 27,27 c 0,0 1.5,1135.5 1.5,1135.5 C 28.5,1162.5 1173,582 1173,582 1173,582 36,31.5 36,31.5" />
                <path
                    id="Unnamed"
                    className='fill-c-crust'
                    stroke="#11111b"
                    stroke-width="1"
                    d="m 27,27 c 0,0 1.5,1135.5 1.5,1135.5 C 28.5,1162.5 1173,582 1173,582 1173,582 36,31.5 36,31.5" />
            </svg>
            <svg
                className='BgTriangleRight'
                width="1000px"
                height="1000px"
                viewBox="0 0 1200 1200"
                version="1.1"
                id="svg225"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    id="Selection"
                    className='fill-c-crust'
                    stroke="#11111b"
                    stroke-width="1"
                    d="m 27,27 c 0,0 18,8.69 18,8.69 0,0 62,30.05 62,30.05 0,0 157,76 157,76 0,0 611,295.52 611,295.52 0,0 190,92 190,92 0,0 62,30 62,30 0,0 45,21.74 45,21.74 0,0 0,2 0,2 0,0 -33,16.75 -33,16.75 0,0 -69,34.99 -69,34.99 0,0 -59,29.52 -
59,29.52 0,0 -81,41.49 -81,41.49 0,0 -276,139.99 -276,139.99 0,0 -128,64.52 -128,64.52 0,0 -177,89.99 -177,89.99 0,0 -223,113 -223,113 0,0 -67,34 -67,34 0,0 -31,14.75 -31,14.75 0,0 0,-496 0,-496 0,0 0,-165 0,-165 0,0 0,-83 0,-83 0,0 -1
,-15 -1,-15 0,0 0,-376 0,-376 z" />
                <path
                    id="Unnamed copy"
                    className='fill-c-crust'
                    stroke="#11111bc"
                    stroke-width="1"
                    d="m 27,27 c 0,0 1.5,1135.5 1.5,1135.5 C 28.5,1162.5 1173,582 1173,582 1173,582 36,31.5 36,31.5" />
                <path
                    id="Unnamed"
                    className='fill-c-crust'
                    stroke="#11111b"
                    stroke-width="1"
                    d="m 27,27 c 0,0 1.5,1135.5 1.5,1135.5 C 28.5,1162.5 1173,582 1173,582 1173,582 36,31.5 36,31.5" />
            </svg>
        </div>
    )

}

export default BgTriangleBlob;
