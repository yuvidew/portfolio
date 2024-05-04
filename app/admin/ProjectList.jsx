import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import ProjectsList from './ProjectsList'
import { Button } from '@/components/ui/button'


export const ProjectList = () => {
    return (
        <Dialog>
        <DialogTrigger>
            <Button className = "mb-[1rem]">
                Projects List
            </Button>
        </DialogTrigger>
        <DialogContent className = "bg-stone-900 rounded-md border-none">
            <ProjectsList width={'100%'} />
        </DialogContent>
        </Dialog>
    )
}
