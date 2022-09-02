import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '2fc6b68affdefa69f2a3c890ae289ac6'
export const getData = createAsyncThunk('/fetch/api', async (query) => {
    const res = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY

        }
    })
    return res.data;
})
export const dataSlice = createSlice({
    name: 'getData',
    initialState: {
        data: [],
        loading: false,
        error: true,
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.loading = true
        },
        [getData.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.data = payload
            state.loading = false
            state.error = false
        },
        [getData.rejected]: (state) => {
            state.error = true
            console.log("Please Enter Valud Country")
        }
    }
})
export default dataSlice.reducer;