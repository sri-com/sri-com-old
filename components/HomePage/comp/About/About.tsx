function About() {


    return (
        <section className='AboutContainer h-[80%] flex items-center justify-center absolute top-[100vh] px-6'>
            <div className='AboutContent flex items-center justify-evenly h-full w-[100%] bg-c-crust flex-col p-5 border-c-text border-4 opacity-90 rounded-xl'>
                <p className='text-c-text font-jetbrains'>&emsp; &emsp;&emsp; &emsp;Hello and welcome to my website! My name is Srivarshan and I'm a computer science student with a deep passion for programming. Ever since I started learning to code, I have been fascinated by the ability to create new things and solve complex problems with just a few lines of code.</p><br />
                <p className='text-c-text font-jetbrains'>Over the years, I have honed my skills in several programming languages, including C++, Rust, and Python. I enjoy working on a wide variety of projects, from developing complex scientific computing applications to building scalable web APIs.</p><br />
                <p className='text-c-text font-jetbrains'>One of the things that drew me to computer science is the limitless possibilities for innovation and creativity. I believe that programming can be a powerful tool for solving some of the world's most pressing problems. I'm passionate about using my skills to make a positive impact, and I'm always looking for ways to contribute to meaningful projects.</p><br />
                <p className='text-c-text font-jetbrains'>As a computer science student, I'm always looking to learn and grow. I'm constantly seeking out new challenges and opportunities to expand my knowledge and skills. I'm excited to share my experiences and insights with you through this website.</p>
                <p className='text-c-text font-jetbrains'>Thank you for visiting, and I hope you find something here that inspires you to pursue your own passions and goals. If you have any questions or comments, please feel free to get in touch. I look forward to hearing from you!</p>
                <a><button className='font-jetbrains text-xl text-c-base font-bold bg-gradient-to-r from-c-teal to-c-blue p-2.5 rounded-xl flex px-2'>
                    <svg className='pr-1' width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g>
                    </svg>Download CV</button></a>
            </div>
            <div className='AboutBox flex flex-col justify-center items-center h-full w-full '>
                <p className='font-jetbrains text-4xl text-c-text '>About</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>About</p>
            </div>
        </section>
    )
}

export default About;
