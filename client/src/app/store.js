import { configureStore} from '@reduxjs/toolkit'
import dishReducer from '../features/dish/dishSlice'
export const store=configureStore({
    reducer:dishReducer
})
