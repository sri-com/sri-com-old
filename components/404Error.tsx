function Custom404() {
    return (
        <div className="Custom404 bg-c-base flex items-center justify-center w-full h-full red">
            <div className="flex justify-around items-center">
                <p className="font-bold text-8xl ">404</p>
                <div className="404TextSp w-3 h-[6rem] bg-c-text" />
                <p className="font-semibold text-4xl">Page not Found</p>
            </div>
        </div>
    )
}

export default Custom404;
