import SideNavBar from "../HomeComponent/SideNavBar"
import FormPage from "./FormPage"
import { ProjectList } from "./ProjectList"
import ProjectsList from "./ProjectsList"

const page = () => {
    
    return (
        <section className="flex items-start mt-[1rem]">
            <div className={
            "p-1 h-full lg:block md:hidden hidden"
            }>
                <SideNavBar width={"w-[20rem]"} />
            </div>
            <div className="p-1 w-full h-full">
                <div className="lg:hidden md:block block">
                    <ProjectList />
                </div>
                <section className=" flex items-start gap-2 ">
                    <FormPage/>
                    <div className=" w-[30%] lg:block md:hidden hidden">
                        <ProjectsList width={"100%"} />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default page