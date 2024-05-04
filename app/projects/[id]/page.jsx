import SideNavBar from '@/app/HomeComponent/SideNavBar'
import { ProjectDetailComp } from './ProjectDetailComp'

const page = ({params}) => {

    return (
        <div className="flex items-start gap-x-3">
            <div className={
                "p-1 h-full lg:block md:hidden hidden "
            }>
                <SideNavBar width={"w-[20rem]"} />
            </div>
            <div className="p-1 w-full ">
                <ProjectDetailComp id = {params.id} />
            </div>
        </div>
    )
}

export default page