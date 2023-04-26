import './Skills.css'

function Skills() {
    return (
        <section className='SkillsContainer w-screen h-screen flex items-center justify-around absolute top-[calc(200vh)]'>
            <div className='SkillsBox flex flex-col justify-center items-center h-full w-[30%]'>
                <p className='font-jetbrains text-4xl text-c-text '>Skills</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>Skills</p>
            </div>
            <div className='SkillsContent flex items-center justify-center h-full w-[70%] '>
                <div className='SkillsMotionDiv bg-c-crust opacity-90 rounded-3xl border-4 border-c-text'>
                </div>
            </div>
        </section>
    )
}

export default Skills;
