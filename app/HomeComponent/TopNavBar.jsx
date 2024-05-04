import { Button } from '@/components/ui/button'
import { MenuBtn } from './MenuBtn';

const TopNavBar = () => {
    return (
    <>
        <header className=' h-[4rem] '>
            <nav className='h-full  '>
                <div className="flex items-start justify-between  m-auto w-[97%] h-full">
                    <div className="h-full  flex items-center justify-start gap-2">
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-green-500'></span>
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-yellow-500'></span>
                        <span className=' block h-[1rem] w-[1rem] rounded-full bg-orange-500'></span>
                    </div>
                    <div className="h-full  flex items-center justify-end gap-2">
                        <Button variant = "green" >Connect me</Button>
                        <MenuBtn/>
                    </div>
                </div>
            </nav>
        </header>
    </>
    )
}

export default TopNavBar