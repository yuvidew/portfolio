import { Button } from '@/components/ui/button'
import React from 'react'

const AboutMe = () => {
    return (
        <section className="lg:flex items-center gap-2 py-3">
            <div className=' lg:w-[50%] md:w-full sm:w-full'>
                <h3 className=' text-[1.8rem] text-stone-500'>About Me</h3>
                <p className='text-[.9rem] mt-2'> 
                    Hello, my name is Yuvraj , and I am a dedicated MERN Stack Developer with a strong background in 
                    crafting dynamic web applications. My expertise lies in leveraging the power of MongoDB, 
                    Express.js, React, and Node.js to build robust and scalable solutions. I thrive in collaborative 
                    environments, working seamlessly with cross-functional teams to drive project success.
                    <br/>
                    <br/>
                    In terms of technical skills, I am proficient in 
                    both front-end and back-end development. On the front-end, I specialize in React.js, Redux, HTML5, CSS3, 
                    and JavaScript ES6+. On the back-end, I excel in Node.js, Express.js, MongoDB, and Mongoose. I am experienced 
                    in designing and implementing RESTful APIs, optimizing database performance, and ensuring data security. Additionally, 
                    I bring skills in responsive web design and mobile development.
                    <br/>
                    <br/>
                    I'm a dedicated team player and have experience collaborating with cross-functional teams, including designers and product managers. I believe that effective communication and collaboration are key to delivering successful projects.
                </p>
            </div>
            <div className='lg:w-[50%] md:w-full sm:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                <div className=' w-[100%] p-3'>
                    <div className='bg-stone-900 flex items-center justify-center w-[90%] h-[9rem] rounded-md m-auto flex-col px-3'>
                        <h1 className=' text-[2rem]'>0</h1>
                        <h3>Working Experience</h3>
                    </div>
                </div>
                <div className=' w-[100%] p-3'>
                    <div className='bg-stone-900 flex items-center justify-center w-[90%] h-[9rem] rounded-md m-auto flex-col px-3'>
                        <h1 className=' text-[2rem]'>0</h1>
                        <h3>Projects</h3>
                    </div>
                </div>
                <div className=' w-[100%] p-3'>
                    <div className='bg-stone-900 flex items-center justify-center w-[90%] h-[9rem] rounded-md m-auto flex-col px-3'>
                        <Button variant = "green">Download me Cv</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe