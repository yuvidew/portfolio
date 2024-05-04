"use client"

import ProjectCard from './ProjectCard'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Spinner from '@/components/ui/Spinner'
import Link from 'next/link'


const tagBars = [
    {
        text : "MERN"
    },
    {
        text : "React js"
    },
    {
        text : 'Next js'
    },
    {
        text : 'Server/Api'
    },
    {
        text : "Javascritpt"
    }
]

const ProjectSection = () => {
    const projects = useQuery(api.documents.getProjects)

    return (
        <section className=' h-full w-[97%] m-auto '>
            <h3 className=' text-[1.5rem] text-stone-400 mt-2 mb-2'>My Project's</h3>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" className=' bg-black' />
                </SelectTrigger>
                <SelectContent>
                    {tagBars.map((ele) => (
                        <SelectItem key={ele.text} value={ele.text}>{ele.text}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {projects != undefined ? (
                <section className=' mt-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full  gap-3'>
                    {projects.map((ele => (
                        <article key={ele._id} >
                            <Link href={`/projects/${ele._id}`}>
                                <ProjectCard ele = {ele} />
                            </Link>
                        </article>
                    )))}
                </section>
            ) : (
                <div className=' flex items-center justify-center h-[25rem]'>
                    <Spinner size={"lg"} />
                </div>
            )}
        </section>
    )
}

export default ProjectSection