import React from 'react'
import {Link} from "react-router-dom"
import contents from './utils/contents'
import "./Styles/Sidebar.css"
function SideBar() {
  
  return (
    <div className='sidebar-container'>
      {
        contents.map((content,index) => (
          <Link to="" className={index === 0 ? "links active" : "links"}key={index}>
            <div>
              {content.icon}
            </div>
            <p>{content.text}</p>
          </Link>
        ))
      }
    </div>
  )
}

export default SideBar