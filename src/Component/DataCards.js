import React from 'react'
import "./Styles/Datacard.css"
import {CgFileDocument} from "react-icons/cg"
import {VscWarning} from "react-icons/vsc"
import {BsGraphUp} from "react-icons/bs"
import {HiOutlineLightBulb} from "react-icons/hi"

function DataCards({show,progress,completed,details}) {
  const tempstyle = {fontSize:"1rem"};
  return (
    <div className={show ? "card-container" : "card-container show"}>
        <div className={show ? 'project-details' : 'project-details s1'}>
            <p className='project-name'>{details.projectname}</p>
            <p className='project-schedule'>{details.schedule}</p>
            <p className='project-engineer'>{details.type}</p>
            <p className='project-date'>{details.duration}</p>
        </div>


        <div className={show ? 'project-stats' : 'project-stats s2'}>
            <div className={progress ? 'one s3' : 'one'  && completed ? 'one s4' : 'one'}>
                <BsGraphUp style={tempstyle}/>
                <p>| {details.percentage}</p>
            </div>
            <div className='two'>
                <CgFileDocument style={tempstyle}/>
                <p>| Notes</p>
            </div>
            <div className='three'>
                <VscWarning style={tempstyle}/>
                <p>| No Risk</p>
            </div>
        </div>

        {
            show && 
            <div className='project-duration'>
                <div className='dr'>
                    <HiOutlineLightBulb style={tempstyle}/>
                    <p> | Predicted Completion Time : {details.predictedduration}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default DataCards