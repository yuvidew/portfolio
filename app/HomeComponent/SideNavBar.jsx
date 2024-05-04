"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Github, Home, Instagram, Linkedin, MessageSquareText, SquareGanttChart, Twitter, Waypoints } from 'lucide-react';

const menuLink = [
    {
        text : 'Home',
        url : '/',
        comp : <Home className='text-[1.5rem]' />,
    },
    {
        text : "Project's",
        url : '/projects',
        comp : <SquareGanttChart  className='text-[1.5rem]' />,
    },
    {
        text : "Blog's",
        url : '/blog',
        comp : <MessageSquareText className='text-[1.5rem]' />,
    },
]

const SocialsLink = [
    {
        text : 'Twitter/X',
        url : 'https://twitter.com/Yuvidew108',
        comp : <Twitter className=' text-stone-400 ' />,
    },
    {
        text : 'Github',
        url : 'https://github.com/yuvidew',
        comp : <Github className=' text-green-800'/>,
    },
    {
        text : 'Linkedin',
        url : 'https://www.linkedin.com/in/yuvraj-dewangan-435b36269/',
        comp : <Linkedin className=' text-blue-500' />,
    },
    {
        text : 'Instagram',
        url : 'https://www.instagram.com/yd00102',
        comp : <Instagram className=' text-red-600' />,
    },
]
const SideNavBar = ({width}) => {
    const pathName = usePathname()
    return (
        <aside 
            className={
                cn(
                    `h-[70vh] ${width} bg-stone-900 rounded-md relative z-[50] group/sidebar`,
                )
            }
        >
            <div className=" px-2 pt-6 ">
                <ul className=' mt-2 line-clamp-3 '>
                    {menuLink.map(ele => (
                        <Link 
                            href={ele.url}
                            key={ele.text}
                        >
                            <li
                                className={
                                    cn(
                                        'mt-4 p-2  text-muted-foreground rounded-md flex items-center gap-3 cursor-pointer text-stone-500 ',
                                        pathName === ele.url && "bg-stone-800 text-stone-300"
                                    )
                                }
                            >
                                {ele.comp}
                                {ele.text}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className=" px-2 pt-7 ml-2">
                <span className='flex items-center gap-2  '>
                    <Waypoints className='text-stone-500' />
                    <h1 className='text-stone-500 '>
                        Socials
                    </h1>
                </span>
                <ul className=' mt-3 line-clamp-3 ml-10'>
                    {SocialsLink.map(ele => (
                        <Link 
                            href={ele.url}
                            key={ele.text}
                            className=' text-stone-500'
                        >
                            <li
                                className='mt-3 p-2 text-muted-foreground flex items-center gap-3 text-stone-500 '
                            >
                                {ele.comp}
                                {ele.text}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideNavBar