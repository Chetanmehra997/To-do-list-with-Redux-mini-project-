import { createSlice } from "@reduxjs/toolkit";

const initialState={

    value:[]
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{

        addItem:(state,actions)=>{

            actions.payload.id=makeid();
 
            state.value.push(actions.payload);


        },
        editItem:(state)=>{




        },
        dateItem:(state)=>{




        },

        removeItem:(state,action)=>{

            state.value=state.value.filter(ele=>ele.id!==action.payload);

        }
    }
});


export const {addItem,removeItem,editItem,dateItem}=todoSlice.actions;

export default todoSlice.reducer;