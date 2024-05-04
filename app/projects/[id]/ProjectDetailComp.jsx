"use client"
import Spinner from '@/components/ui/Spinner';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Github, Radio } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const ProjectDetailComp = ({id}) => {
    const project = useQuery(api.documents.getProjectsId , {
        id : id
    })

    console.log(project);

    
        return (
            <section>
                {(project !== undefined && project !== null) ? (
                    <div className=' flex gap-x-2'>
                        <article className=' w-[65%]'>
                            <div className=' h-[31rem] w-full'>
                                <img 
                                    src={project.imageUrl} 
                                    alt="" 
                                    className=' h-full w-full object-cover rounded-lg'
                                />
                            </div>
                            <div className=' mt-[1rem] rounded-lg p-[2rem] shadow-xl bg-stone-900'>
                                <h2 className='capitalize'>{project.name}</h2>

                                <div className='mt-5'>
                                    {project.technology.map(ele => (
                                        <Button 
                                            key={ele}
                                            variant = "secondary"
                                            size = "md"
                                            className = " mr-2 px-3 py-1"
                                        >
                                            {ele}
                                        </Button>
                                    ))}
                                </div>
                                <p className=' mt-4 text-sm'>{project.description}</p>
                            </div>
                        </article>
                        <article className=' w-[35%] bg-stone-900 flex items-center gap-x-5 h-[20%] p-5'>
                            <Link href={project.liveUrl}>
                                <Button variant = "secondary" className = "text-center">
                                    <Radio className=' text-red-600 mr-2' />
                                    Live Link
                                </Button>
                            </Link>
                            <Link href={project.githubUrl}>
                                <Button variant = "secondary" className = "text-center">
                                    <Github className=' mr-2' />
                                    Github Link
                                </Button>
                            </Link>
                        </article>
                    </div>
                ) : (
                    <div className=' flex items-center justify-center h-[30rem] w-full'>
                        <Spinner size={"lg"} />
                    </div>
                )}
            </section>
        )
}
