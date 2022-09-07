import { configureStore } from "@reduxjs/toolkit"
import Colortype from "./ColorSlice"
import dataSlice from "./dataSlice"
export const Store = configureStore({
    reducer: {
        Fdata: dataSlice,
        color: Colortype
    }
})