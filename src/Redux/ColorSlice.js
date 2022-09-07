import { createSlice } from "@reduxjs/toolkit";

export const Colortype = createSlice({
    name: 'color',
    initialState: {
        colorData: ['#5ce4ff', '#ba95ff', '#ccff74', '#dc3545'],
        appClass: window.localStorage.getItem('color')
    },
    reducers: {
        setAppClass: (state, { payload }) => {
            state.appClass = payload
        }
    }
})
export const { setAppClass } = Colortype.actions;
export default Colortype.reducer;