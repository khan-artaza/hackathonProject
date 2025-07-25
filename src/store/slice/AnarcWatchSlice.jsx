import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
  }

  export const AnarcWatchSlice = createSlice({
    name : "anarcWatch",
    initialState,
    reducers : {
        LoadAnarcWatch : (state, action) =>{
            state.data = action.payload
        }
    }
  })

  export const {LoadAnarcWatch} = AnarcWatchSlice.actions

  export default AnarcWatchSlice.reducer