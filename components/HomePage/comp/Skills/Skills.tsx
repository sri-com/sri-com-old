function Skills() {
    return (
        <section className='SkillsContainer w-full h-[80%] flex items-center justify-around absolute top-[calc(200vh)] px-6'>
            <div className='SkillsBox flex flex-col justify-center items-center w-[30%] '>
                <p className='font-jetbrains text-4xl text-c-text '>Skills</p>
                <p className='font-jetbrains text-9xl text-c-overlay0'>Skills</p>
            </div>
            <div className='SkillsContent flex items-center justify-center h-full w-[70%] bg-c-crust opacity-90 border-4 border-c-text rounded-xl px-6'>
            </div>
        </section>
    )
}

export default Skills;
