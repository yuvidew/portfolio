import React from 'react'
import style from './home.module.css'
import Image from 'next/image'
import user from '@/public/user.jpg'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter } from 'lucide-react'

const HomePage = () => {
    return (
        <section className='h-[80vh] pt-3 m-auto w-[98%]'>
            <div className={`${style.hero} h-[20rem] w-full ` }>
                <div className="h-full flex items-start">
                    <div className='h-full w-[40%]  flex items-center justify-center'>
                        <picture className={` rounded-full overflow-hidden ${style.borderImage}`}>
                            <Image src={user} className='w-[8rem] h-[8.1rem] object-cover'/>
                        </picture>
                    </div>
                    <div className='h-full w-[60%]  flex flex-col gap-2 items-start justify-center'>
                        <h2 className=' text-[1.7rem]'>Yuvraj Dewangan</h2>
                        <p className=' text-stone-400'>@Yuvidew108</p>
                        <div className='flex items-center gap-2'>
                            <Button variant = {"default"} className="mt-2 bg-stone-900">
                                <Twitter  className='text-stone-400 text-[1.3rem]' />
                            </Button>
                            <Button variant = {"default"} className="mt-2 bg-stone-900">
                                <Linkedin  className='text-stone-400 text-[1.3rem]' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default HomePage