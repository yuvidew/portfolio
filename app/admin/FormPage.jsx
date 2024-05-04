'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from "@/components/ui/label"
import { Upload, X } from 'lucide-react'
import React, { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import useUploadImgHook from '@/hook/useUploadImgHook'
import Spinner from '@/components/ui/Spinner'
// import { useMutation } from '


const initialData = {
    name :  "",
    starting : "",
    ending : "",
    description: "",
    liveUrl: "",
    githubUrl: "",
    technology : [],
    imageUrl : "",
}

const FormPage = () => {
    const [tech , setTech] = useState([])
    const [techName , setTechName] = useState('')
    const [inputData , setInputData] = useState(initialData)
    const createProject = useMutation(api.documents.createProjects)
    const [handleImgUpload , imgUrl , itsUploaded] = useUploadImgHook()

    const onChange = (e) => {
        const {name , value} = e.target;
        setInputData({
            ...inputData , 
            [name] : value,
        })
    }

    const onSubmit = () =>{
        const promise = createProject({
            name :  inputData.name,
            starting : inputData.starting,
            ending : inputData.ending,
            description: inputData.description,
            liveUrl: inputData.liveUrl,
            githubUrl: inputData.githubUrl,
            technology : tech,
            imageUrl : imgUrl,
        })
        
        toast.promise(promise , {
            loading : 'Creating a new note...',
            success : "New note created!",
            error : "Failed to create a new note."
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTech(pre => [...pre , techName])
        setTechName('')
    }


    return (
        <section className='lg:w-[70%] md:w-[100%] w-full bg-stone-900  rounded-md py-3 px-4'>
            <h1 className=' text-[1.2rem] mt-4'>Add new Project</h1>
            <main action="" className=' mt-5'>
                <div className=" w-full mb-5">
                    <Label htmlFor = "name">Project name</Label>
                    <Input value = {inputData.name} onChange = {(e) => onChange(e)} id = 'title' placeholder = "Enter project title.." name = "name" className = " mt-2" />
                </div>
                <div className="flex items-center gap-x-3 mb-5">
                    <div className='w-[50%]'>
                        <Label htmlFor = "starting">Starting Date</Label>
                        <Input value = {inputData.starting} onChange = {(e) => onChange(e)} id = "starting" name = "starting" placeholder = "Enter project project starting date..." className = "mt-2"  type = "date" />
                    </div>
                    <div className='w-[50%]'>
                        <Label htmlFor = "ending">Ending Date</Label>
                        <Input value = {inputData.ending} onChange = {(e) => onChange(e)} id = "ending" name = "ending" placeholder = "Enter project project ending date..." className = "mt-2" type = "date"  />
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-5">
                    <div className='w-[50%]  gap-x-2'>
                        <Label htmlFor = "tech">Upload Image</Label>
                        <div className='mt-3 flex items-center gap-x-2'>
                            <Input 
                                placeholder = "Enter project project starting date..." 
                                type = "file" 
                                accept = "image/*"
                                onChange = {(e) => handleImgUpload(e.target.files[0])}
                            />
                            <Button variant = "green" >
                                {!itsUploaded ? (
                                    <Upload/>
                                ) : (
                                    <Spinner/>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className=' mb-5'>
                    <Label htmlFor = "liveUrl">Project Live url</Label>
                    <Input value = {inputData.liveUrl} onChange = {(e) => onChange(e)} name = "liveUrl" id = "liveUrl" placeholder = "Enter live url.." className = "mt-2" />
                </div>
                <div className=' mb-5'>
                    <Label htmlFor = "githubUrl">Project Github url</Label>
                    <Input value = {inputData.githubUrl} onChange = {(e) => onChange(e)} name = "githubUrl" id = "githubUrl" placeholder = "Enter live github.." className = "mt-2" />
                </div>
                <div className=' mb-5'>
                <form action="" onSubmit={handleSubmit}>
                    <Label htmlFor = "tech">Project Technology/Languages</Label>
                    <Input 
                        name = "technology" 
                        id = "tech" 
                        placeholder = "Enter Technology/Languages.." 
                        className = "mt-3" 
                        value = {techName}
                        onChange = {e => setTechName(e.target.value)}
                    />
                </form>
                    <div className=' mt-4 '>
                        {tech.map(ele => (
                            <Button 
                                key={ele}
                                variant = "secondary" 
                                className = "inline-flex m-2"
                            >{ele} <X className=' h-4 w-4 ml-3' /></Button>
                        ))}
                    </div>
                </div>
                <div className=' mb-5'>
                    <Label htmlFor = "description">Project Description</Label>
                    <Textarea value = {inputData.description} onChange = {(e) => onChange(e)} name = "description" id = "description" className = " mt-3 bg-stone-800 placeholder:text-stone-200 resize-none h-[10rem]" placeholder = "Enter project description..."></Textarea>
                </div>
                <Button onClick = {onSubmit} variant = "green">Submit</Button>
            </main>
        </section>
    )
}

export default FormPage