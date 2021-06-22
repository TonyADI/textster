import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
    name: 'date',
    initialState: 0,
    reducers: {
        changeDate: (state:number, action:{type:string; payload: number}) => {
            return state + action.payload;
        }
    }
})

export const selectDate = (state: {date: number}) => state.date;

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;