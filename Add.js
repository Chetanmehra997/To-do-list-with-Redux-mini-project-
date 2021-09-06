import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {addItem} from "../slice/todolist"

function Add() {
    const[state,setState]=useState({

        title:"",
        summary:"",
        date:"",
    })

    const send=useDispatch();

    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value});
    }

    // const handleSubmit=()=>{
    //     setState({...state,id:makeid()});
    //     send(addItem(state));
    // }




    return (
        <div>
            <div>
            <input type="text" placeholder="Title"name="title" onChange={handleChange}></input>
            </div>
            <br/>
            <div>
            <input type="text" placeholder="Summary"name="summary" onChange={handleChange}></input>
            </div>
            <br/>
            <div>
            <input type="datetime-local" placeholder="DOB" name="date" onChange={handleChange}></input>
            </div>
            <br/>
            <button onClick={()=>send(addItem(state))}>Add Details</button>
            
        </div>
    )
}

export default Add

