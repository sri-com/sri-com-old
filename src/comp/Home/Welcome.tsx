import './Welcome.css'

function Welcome() {
    return (
        <div className="WelcomeContainer float-left top-14 flex flex-col justify-center items-start max-w-4xl text-justify text-c-text px-5">
            <p className="WelcomeText text-5xl mt-[15%] ">Hi, I'm</p>
            <p className="WelcomeText text-6xl" id="NameText">Srivarshan</p>
            <p className="WelcomeText text-4xl my-2">Computer Science Student</p>
            <p className="WelcomeTextPara font-jetbrains my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius urna id orci pharetra, non rhoncus est consectetur. Fusce libero massa, placerat vitae ipsum in, scelerisque vulputate elit. Proin tempor, nunc in ornare dictum, sem libero blandit tellus, a mattis quam dui nec mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a interdum tortor. Integer accumsan, mauris eget blandit pellentesque, dolor est vestibulum ex
            </p>
        </div>
    )
}

export default Welcome;
