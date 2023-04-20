import './Welcome.css'

function Welcome() {
    return (
        <div className="WelcomeContainer float-left w-[60%] top-14 h-full flex flex-col justify-center items-start max-w-[90rem] max-h-[40rem]">
            <p className="WelcomeText text-5xl mt-[15%] text-ctext">Hi, I'm</p>
            <p className="WelcomeText text-6xl" id="NameText">Srivarshan</p>
            <p className="WelcomeText text-4xl pt-4 text-ctext">Computer Science Student</p>
            <p className="WelcomeTextPara font-jetbrains text-ctext pt-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius urna id orci pharetra, non rhoncus est consectetur. Fusce libero massa, placerat vitae ipsum in, scelerisque vulputate elit. Proin tempor, nunc in ornare dictum, sem libero blandit tellus, a mattis quam dui nec mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a interdum tortor. Integer accumsan, mauris eget blandit pellentesque, dolor est vestibulum ex
            </p>
        </div>
    )
}

export default Welcome;
