"use client"
import Link from 'next/link'

const About = () => {
    return (
            <div className='flex mt-20 flex-col gap-4 w-full'>
                <section className='flex flex-col w-full p-4'>
                    <h1 className='text-6xl text-center'>Strive To <span className="text-indigo-700">Innovate</span></h1>
                    <p className='text-sm text-center w-[75%] m-auto'>As a software developer, my role includes making critical decisions regarding programming languages, design patterns, and development frameworks.</p>
                </section>

                <section className='flex h-full items-start justify-evenly'>
                    <div className="flex flex-col gap-[50px] justify-between h-full">
                        <article className='flex flex-col gap-2 '>
                            <h2 className='text-3xl'><span className='text-indigo-700 font-semibold'>4+</span> Years</h2>
                            <p className='text-sm w-[230px]'>I am a web developer with over <span className="text-indigo-700">4+</span> years in website development. I have honed skills such as <span className="text-indigo-700">HTML, CSS, JASVASCRIPT, TYPESCRIPT, EACT , NEXT.JS</span> etc, just to nsme a few.I have also worked on projects that showcase and solidify my skills. </p>
                        </article>
                        <article className='flex flex-col gap-2 w-[230px]'>
                            <h2 className='text-3xl'><span className='text-indigo-700 font-semibold'>12+</span> Projects</h2>
                            <p className='text-sm'>Within my period of been a web developer, i have created <span className="text-indigo-700">12+</span> beautifulprojects that showcase my skill and handworks,some of them are <span className="text-indigo-700">Tradesafe User Management site, Tesla Clone, Linkedin Clone</span> etc.</p>
                        </article>
                    </div>

                    <div className="h-[500px] w-[360px] bg-gray-400"></div>

                  <div className="flex flex-col justify-evenly gap-[20px] h-full">
                  <div className="flex flex-col gap-2">
                        <h2 className='text-lg font-semibold text'>About Me</h2>
                        <p className="text-sm w-[320px] font-semibold"> My name is <span className="text-indigo-700">Miracle Mark Chukwuemeka</span> and i am a <span className="text-indigo-700">Full-stack Web Developer</span>, and i was born and grew up in Nigeria. Ever since i was little i have always wanted to solve problems and contribute to the growth and developmenmt of those around me and my self as well. I discovered programming when i was 19 years old with the c# language, but dropped it because i had to go to school. But during the covid-19 out break, i decided to start programming all over again , but thistime in web development. And i have grown and waxed stronger in web development ever since then because web development is what i love to do.</p>
                    </div>
                   <section className=" ">
                    <h3 className='mb-2 text-lg'>My Social media</h3>
                   <div className="flex gap-2">
                        <Link href='#' className='rounded-full h-8 w-8 bg-gray-400'></Link>
                        <Link href='#' className='rounded-full h-8 w-8 bg-gray-400'></Link>
                        <Link href='#' className='rounded-full h-8 w-8 bg-gray-400'></Link>
                        <Link href='#' className='rounded-full h-8 w-8 bg-gray-400'></Link>
                        <Link href='#' className='rounded-full h-8 w-8 bg-gray-400'></Link>
                    </div>
                   </section>
                    
                  </div>
                </section>

                <section className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className='text-3xl'>My Skills </h2>
                        <h3 className="text-lg text-indigo-700">Fron-end Skills</h3>
                        <div className="grid grid-cols-8 grid-rows-8 gap-8 mb-3 ">
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                        </div>

                         <h3 className="text-lg text-indigo-700">Back-end Skills</h3>
                         <div className="grid grid-cols-8 grid-rows-8 gap-8 mb-3 ">
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                            <div className='h-[80px] bg-gray-400'></div>
                        </div>
                    </div>
                </section>

                <section className="w-full p-6">
                    <h2 className="text-3xl">Experinces I Have Had</h2>
                    {/* experience */}
                    <div className="w-full  p-2 flex justify-start items-start gap-2">
                        <span className="rounded-full bg-gray-400 w-12 h-12"></span>
                        <div className="h-[200px] p-2 rounded-md w-[500px] bg-gray-400"></div>
                    </div>
                       {/* experience */}
                    <div className="w-full flex p-2 justify-star flex-row-reverse items-start gap-2">
                        <div className="rounded-full bg-gray-400 w-12 h-12"></div>
                        <div className="h-[200px] p-2 rounded-md w-[500px] bg-gray-400"></div>
                    </div>
                      {/* experience */}
                      <div className="w-full  p-2 flex justify-start items-start gap-2">
                        <span className="rounded-full bg-gray-400 w-12 h-12"></span>
                        <div className="h-[200px] p-2 rounded-md w-[500px] bg-gray-400"></div>
                    </div>
                      {/* experience */}
                      <div className="w-full flex p-2 justify-star flex-row-reverse items-start gap-2">
                        <div className="rounded-full bg-gray-400 w-12 h-12"></div>
                        <div className="h-[200px] p-2 rounded-md w-[500px] bg-gray-400"></div>
                    </div>
                </section>

                <section className="w-full p-6">
                    <h2 className="text-3xl mb-2 text-center">Reviews and Comments</h2>
                    <p className='text-lg text-center mb-8'>Find out what people have to say about me and my work</p>
                    
                </section>
            </div>
    )
}

export default About
