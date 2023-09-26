import StudentSlice from "../Slice/Slice"
import { configureStore } from "@reduxjs/toolkit";
const Store = configureStore({
    reducer : {
        Stu_Data : StudentSlice
    }
})

export default Store;