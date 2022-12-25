import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/useSlice";

export const Store = configureStore({
    reducer: {
        users :userReducer
    }
})