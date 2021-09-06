import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { removeItem } from "../slice/todolist";

function View() {
    
    const viewshow=useSelector(state=>state.todolist);
     const dispatch=useDispatch();
    console.log(viewshow);




  return (
        <div>
            
         <ul>
         {viewshow.value.map(ele=>(
               <> 
               {ele.id}

             <li> 
                <span>{ele.title}</span> <br/>
                <span> {ele.summary}</span><br/>
                <span>    {ele.date}</span> <br/>

              <button onClick={()=>dispatch(removeItem(ele.id))}>Delete</button>
             
             </li>
             </>
              ))}
           </ul>
            
        </div>
    )
}

export default View
