import React from 'react'
import SideNavBar from '../HomeComponent/SideNavBar'
import ProjectSection from './ProjectsComp/ProjectSection'

const page = () => {
    return (
        <>
            <div className="flex items-start ">
                <div className={
                "p-1 h-full lg:block md:hidden hidden "
                }>
                    <SideNavBar width={"w-[20rem]"} />
                </div>
                <div className="p-1 w-full">
                    <ProjectSection/>
                </div>
            </div>
        </>
    )
}

export default page