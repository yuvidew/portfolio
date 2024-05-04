import SideNavBar from "./HomeComponent/SideNavBar";
import TopNavBar from "./HomeComponent/TopNavBar";
import HomePage from "./HomeComponent/HomePage";


export default function Home() {
  return (
  <>
    <TopNavBar  />
      <div className="flex items-start ">
        <div className={
          "p-1 h-full lg:block md:hidden hidden "
        }>
          <SideNavBar width={"w-[20rem]"} />
        </div>
        <div className="p-1 ">
          <HomePage/>
        </div>
      </div>
  </>
  );
}
