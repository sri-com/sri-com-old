import './About.css'

function About() {


    return (
        <section className='AboutContainer w-screen h-screen flex items-center justify-around absolute top-[100vh]'>
            <div className='AboutContent flex items-center justify-center h-full w-[70%] '>
                <div className='AboutMotionDiv bg-c-crust opacity-90 rounded-3xl border-4 border-c-text p-5 flex flex-col justify-evenly items-center'>
                    <p className='text-c-text font-jetbrains'>&emsp; &emsp;&emsp; &emsp;Hello and welcome to my website! My name is Srivarshan and I'm a computer science student with a deep passion for programming. Ever since I started learning to code, I have been fascinated by the ability to create new things and solve complex problems with just a few lines of code.</p><br />
                    <p className='text-c-text font-jetbrains'>Over the years, I have honed my skills in several programming languages, including C++, Rust, and Python. I enjoy working on a wide variety of projects, from developing complex scientific computing applications to building scalable web APIs.</p><br />
                    <p className='text-c-text font-jetbrains'>One of the things that drew me to computer science is the limitless possibilities for innovation and creativity. I believe that programming can be a powerful tool for solving some of the world's most pressing problems. I'm passionate about using my skills to make a positive impact, and I'm always looking for ways to contribute to meaningful projects.</p><br />
                    <p className='text-c-text font-jetbrains'>As a computer science student, I'm always looking to learn and grow. I'm constantly seeking out new challenges and opportunities to expand my knowledge and skills. I'm excited to share my experiences and insights with you through this website.</p>
                    <p className='text-c-text font-jetbrains'>Thank you for visiting, and I hope you find something here that inspires you to pursue your own passions and goals. If you have any questions or comments, please feel free to get in touch. I look forward to hearing from you!</p>
                    <a><div className='font-jetbrains text-2xl text-c-base font-bold bg-gradient-to-r from-c-teal to-c-blue p-4 rounded-xl'>Download CV</div></a>
                </div>
            </div>
            <div className='AboutBox flex flex-col justify-center items-center h-full w-[30%]'>
                <p className='font-jetbrains text-4xl text-c-text '>About</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>About</p>
            </div>
        </section>
    )
}

export default About;
