import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={
    dishes:[{
        id:nanoid(),
        dishname:'pakode'
    },]
}
export const dishSlice=createSlice({
    name:'dish',
    initialState,
    reducers:{
        addDish:(state,action)=>{
            const dish={
                id:nanoid(),
                email:action.payload.email,
                password:action.payload.password,
            }
            state.dishes.push(dish)
        },
        removeDish:(state,action)=>{
            state.dishes=state.dishes.filter((dish)=>{
                dish.id !==action.payload.id
            })
        },
        updateDish:(state,action)=>{
            state.dishes.filter((dish)=>{
                dish.id === action.payload.id?action.payload.dish:dish
            })
        },
    }
})


export const {addDish,removeDish} =dishSlice.actions
export default dishSlice.reducer