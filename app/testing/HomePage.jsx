'use client'

import React, { useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'


const HomePage = () => {
    const create = useMutation(api.documents.createTodo1)
    const [data , setData] = useState({
        title : "",
        description : "",
        price : '',
        brand : "",
        category : "",
    })

    const handleChange = (e) => {
        const {name , value} = e.target

        setData(prev => ({
            ...prev , 
            [name] : value
        }));
    }

    const onSubmit = () => {
        const promise = create(data)

        toast.promise(promise , {
            loading : 'Creating a new note...',
            success : "New note created!",
            error : "Failed to create a new note."
        })
    }

    return (
        <div className=' container'>
            <Card className = " bg-stone-800">
                <CardContent className = "h-full">
                <div className='   pt-5'>
                    <Input 
                        placeholder = "Enter title..." 
                        className = "px-3 py-2 bg-transparent mb-5 text-white placeholder:text-white"        
                        value = {data.title}
                        name = "title"
                        onChange = {handleChange}
                    />
                    <Input 
                        placeholder = "Enter price..." 
                        className = "px-3 py-2 bg-transparent mb-5 text-white placeholder:text-white"        
                        value = {data.price}
                        name = "price"
                        onChange = {handleChange}
                    /><Input 
                        placeholder = "Enter brand..." 
                        className = "px-3 py-2 bg-transparent mb-5 text-white placeholder:text-white"        
                        value = {data.brand}
                        name = "brand"
                        onChange = {handleChange}
                    /><Input 
                        placeholder = "Enter category..." 
                        className = "px-3 py-2 bg-transparent mb-5 text-white placeholder:text-white"        
                        value = {data.category}
                        name = "category"
                        onChange = {handleChange}
                    />
                    <Textarea 
                        className = "px-3 py-2 bg-transparent mb-5 text-white placeholder:text-white"
                        placeholder = "Enter description..."       
                        value = {data.description}
                        name = "description"
                        onChange = {handleChange}   
                    ></Textarea>
                    <Button
                        variant = "default"
                        className = "text-white"
                        onClick = {onSubmit}
                    >
                        Submit
                    </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default HomePage