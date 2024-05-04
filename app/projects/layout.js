import React from 'react'
import TopNavBar from '../HomeComponent/TopNavBar'

const layout = ({children}) => {
    return (
        <div>
        <TopNavBar/>
            {children}
        </div>
    )
}

export default layout