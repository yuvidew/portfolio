import React from 'react'
import TopNavBar from '../HomeComponent/TopNavBar'

const layout = ({children}) => {
    return (
        <div>
            <header>
                <TopNavBar/>
            </header>
            <div className=' p-2'>
                {children}
            </div>
        </div>
    )
}

export default layout