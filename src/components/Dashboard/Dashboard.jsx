import React from 'react'
import './dashboard.css'
import SideNav from './SideNav'
import MainSection from './MainSection'
import RightSection from './RightSection'
function Dashboard() {
  return (
    <div  className="dashboard">
        <SideNav className='sidenav-dashboard'/>
        <MainSection className='mainsection-dashboard'/>
        <RightSection className='rightsection-dashboard'/>
    </div>
  )
}

export default Dashboard
