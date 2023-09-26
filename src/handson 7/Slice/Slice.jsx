import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Sachin",
    age: 30,
    course: "MERN",
    batch: "EA21",
  },
  {
    name: "Dhoni",
    age: 23,
    course: "FNT",
    batch: "EA20",
  },
  {
    name: "Rohit",
    age: 34,
    course: "BCK",
    batch: "EA23",
  },
  {
    name: "Yuvraj",
    age: 50,
    course: "LFT",
    batch: "EA26",
  },
  {
    name: "Dhawan",
    age: 29,
    course: "RFT",
    batch: "EA24",
  },
];
const StudentSlice = createSlice({
  name: "Stu_Data",
  initialState,
  reducers: {
    editStudent : (state, action) => {
        state[action.payload.index] = action.payload.info;
    },
    addStudent : (state,action) => {
        state.push(action.payload.info)
    }
  },
});

export const {editStudent, addStudent} = StudentSlice.actions;
export default StudentSlice.reducer;
