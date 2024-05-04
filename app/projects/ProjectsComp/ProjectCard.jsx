'use client'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"


const ProjectCard = ({ele}) => {
    return (
        <Card className = "p-0  border-0  rounded-lg overflow-hidden bg-stone-900">
            <CardHeader className = "p-0 ">
                <img 
                    src = {ele.imageUrl}
                    className=" object-cover w-full p-0 h-[13rem]"
                />
            </CardHeader>
            <CardContent>
                <p className=" text-stone-50 capitalize mt-4">{ele.name}</p>
            </CardContent>
        </Card>
    )
}

export default ProjectCard