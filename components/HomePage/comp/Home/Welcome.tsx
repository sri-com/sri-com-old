function Welcome() {
    return (
        <div className="WelcomeContainer float-left top-14 flex flex-col justify-center items-start max-w-4xl text-justify text-c-text px-5">
            <p className="WelcomeText text-5xl mt-[15%] ">Hi, I'm</p>
            <p className="WelcomeText text-6xl" id="NameText">Srivarshan</p>
            <p className="WelcomeText text-4xl my-2">Computer Science Student</p>
            <p className="WelcomeTextPara font-jetbrains my-2">
                &emsp; &emsp; Greetings! I'm Srivarshan - a computer science enthusiast and lifelong learner. I'm passionate about exploring the latest technologies and figuring out how they can be applied to real-world problems. Currently, I'm focused on expanding my knowledge of computer vision, machine learning, web API development, and low-level programming. I love to experiment with different programming languages, and CPP and Rust are two of my favorites.
                <br />
                <br />
                &emsp; &emsp; I created this website as a platform to share my experiences and insights with other tech enthusiasts. I'm always on the lookout for exciting new projects and collaborations, so don't hesitate to get in touch if you'd like to connect!
            </p>
        </div>
    )
}

export default Welcome;
