'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideNavBar from './SideNavBar'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from 'usehooks-ts'
import { AlignLeft } from 'lucide-react'
import { cn } from '@/lib/utils'


export const MenuBtn = () => {
    const isMobile = useMediaQuery("(max-width : 960px)")
    return (
        <Sheet>
        <SheetTrigger>
            <Button
                className = {cn("hidden" , isMobile && "block")} 
            >
                <AlignLeft />
            </Button>
        </SheetTrigger>
        <SheetContent className = "bg-stone-900 border-none pt-[2.5rem]">
            <SideNavBar/>
        </SheetContent>
        </Sheet>
    )
}
