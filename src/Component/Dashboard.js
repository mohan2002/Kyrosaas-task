import React from 'react'
import Datapart from './Datapart'
import SideBar from './SideBar'
import "./Styles/Dashboard.css"

function Dashboard() {
  
  return (
    <div className='dashboard-container'>
        
        
        {/* SideBar */}
    
        <div className='sidebar'>
          <SideBar/>
        </div>


        {/* DataPart */}
        <div className='datapart'>
          <Datapart/>
        </div>



    </div>
  )
}

export default Dashboard