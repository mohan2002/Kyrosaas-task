import React from 'react'
import "./Styles/Datacard.css"
import {CgFileDocument} from "react-icons/cg"
import {VscWarning} from "react-icons/vsc"
import {BsGraphUp} from "react-icons/bs"
import {HiOutlineLightBulb} from "react-icons/hi"

function DataCards() {
  const tempstyle = {fontSize:"1rem"};
  return (
    <div className='card-container'>
        <div className='project-details'>
            <p className='project-name'>TD1160 - Project name</p>
            <p className='project-schedule'>Baseline schedule</p>
            <p className='project-engineer'>Line Design Engineering</p>
            <p className='project-date'>08/10/2020-08/10/2020</p>
        </div>


        <div className='project-stats'>
            <div className='one'>
                <BsGraphUp style={tempstyle}/>
                <p>| 0.00%</p>
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

        <div className='project-duration'>
            <div className='dr'>
                <HiOutlineLightBulb style={tempstyle}/>
                <p> | Predicted Completion Time : 142 days</p>
            </div>
        </div>
    </div>
  )
}

export default DataCards