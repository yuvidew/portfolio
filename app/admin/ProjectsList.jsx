'use client'
import { api } from '@/convex/_generated/api'

import { useMutation, useQuery } from 'convex/react'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Spinner from '@/components/ui/Spinner'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'


const ProjectsList = ({width}) => {
    const projects = useQuery(api.documents.getProjects)
    const deleteProject = useMutation(api.documents.deleteProject)

    
    const onDelete = (Id) => {
        const result = deleteProject({
            id : Id
        })

        toast.promise(result , {
            loading : 'Deleting a project...',
            success : "Projects is Deleted!",
            error : "Failed to delete a project."
        })
    }

    return (
        <section className={`  w-[${width}] bg-stone-900 rounded-md py-3 px-4`}>
            <Accordion type="single" collapsible>
                {projects != undefined ? 
                projects.map((ele) => (
                    <AccordionItem key={ele._id} value={ele._id}>
                        <AccordionTrigger>
                            {ele.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <img src={ele.imageUrl} className=' object-cover w-full h-[15rem]'  />
                            <Button 
                                variant = "destructive" 
                                size = "sm"
                                onClick = {() => onDelete(ele._id)}
                            >
                                <Trash className='h-4 w-4' />
                            </Button>
                        </AccordionContent>
                    </AccordionItem>
                )) : (
                    <div className=' flex items-center justify-center'>
                        <Spinner/>
                    </div>
                )}
            </Accordion>
        </section>
    )
}

export default ProjectsList