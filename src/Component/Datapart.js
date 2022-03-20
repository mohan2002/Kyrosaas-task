import React from 'react'
import "./Styles/Datapart.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import {CgFileDocument} from "react-icons/cg"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import {GrCompliance} from "react-icons/gr"
import {IoIosArrowForward} from "react-icons/io"
import DataCards from './DataCards';
import { useEffect } from 'react';
import axios from 'axios';



function Datapart() {
  const [name, setName] = React.useState("David White");
  const[proj,setProj] = useState("");
  const [value, setValue] = React.useState(new Date());
  const filestyle = {color:'blue',fontSize:"1.3rem"}
  const loadstyle = {color:'orange',fontSize:"1.3rem"}
  const completestyle = {color:'green',fontSize:"1.3rem"}
  const [tododetails,setTododetails] = useState();
  const [progressdetails,setProgressdetails] = useState();
  const [completeddetails,setcompleteddetails] = useState();
  const arrow = {color:'black',fontSize:"1.2rem",fontWeight:"600"};


  const handleName = (event) => {
    setName(event.target.value);
  };
  
  useEffect(async() => {
    await axios("https://kyrosaas.herokuapp.com/tododetails")
      .then(function (response) {
        setTododetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      await axios("https://kyrosaas.herokuapp.com/Progress")
      .then(function (response) {
        setProgressdetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

     await axios("https://kyrosaas.herokuapp.com/ompleteddetails")
      .then(function (response) {
        setcompleteddetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  },[1])

  return (
    <div className='datapart-container'>
      <h1 className='schedule'>Schedule</h1>

      <div className='datapart-hero'>
        <section className='input-section'>
          <div className='datapart-filters'>
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={name}
                    onChange={handleName}
                  >
                    <MenuItem value={"David White"}>David White</MenuItem>
                    <MenuItem value={"Tim"}>Tim</MenuItem>
                    <MenuItem value={"Abi"}>Abi</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className='filterbyproj'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-standard-label">Filter by Project</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={proj}
                    onChange={handleName}
                  >
                    <MenuItem value={"Project 1"}>Project 1</MenuItem>
                    <MenuItem value={"Project 2"}>Project 2</MenuItem>
                    <MenuItem value={"Project 3"}>Project 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='datepicker'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="standard"/>}
                  />
                </LocalizationProvider>
              </div>
          </div>


          <div className="filter-buttons">
            <button className='filter-btn'>APPLY FILTER</button>
            <button className='filter-btn reset'>RESET</button>
          </div>
        </section>
        

        <section className='section-status'>
          <div className='status'>
            <div>
              <CgFileDocument style={filestyle}/>
              <p>To Do</p>
            </div>
            <div>
                <IoIosArrowForward style={arrow}/>
            </div>
          </div>
          
          <div className='status'>
              <div>
                <AiOutlineLoading3Quarters style={loadstyle}/>
                <p>In Progress</p>
              </div>
              <div>
                  <IoIosArrowForward style={arrow}/>
              </div>
          </div>
          
          <div className='status'>
              <div>
                <GrCompliance style={completestyle}/>
                <p>Completed</p>
              </div>
              <div>
                  <IoIosArrowForward style={arrow}/>
              </div>
          </div>
        </section>
        


        <section className='section-datas'>
            <div className='section-statuses'>
                
                {
                  tododetails && tododetails.map((tododetail) => (
                    <DataCards show={true} progress={false} completed={false} details={tododetail}/>
                  ))
                }

            </div>

            <div className='section-statuses'>
                {
                  progressdetails && progressdetails.map((progressdetail) => (
                    <DataCards show={true} progress={true} completed={false} details={progressdetail}/>
                  ))
                }
            </div>

            <div className='section-statuses'>
                {
                  completeddetails&&completeddetails.map((completeddetail) => (
                    <DataCards show={false} progress={false}  completed={true} details={completeddetail}/>
                  ))
                }
            </div>
        </section>
      </div>     
    </div>
  )
}

export default Datapart