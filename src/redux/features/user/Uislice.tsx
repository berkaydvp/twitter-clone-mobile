import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  mobileNav: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        mobileNavToggler : (state) => {
            state.mobileNav = !state.mobileNav;
        },
      
    }
    
})

export const {mobileNavToggler} =uiSlice.actions

export default uiSlice.reducer