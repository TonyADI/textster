import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
    name: 'dateSlice',
    initialState: '',
    reducers: {
        changeDate: (state:string, action:{type:string; payload: string}):string => {
            return action.payload;
        }
    }
})

export const selectDateSlice = (state: {dateSlice: string}) => state.dateSlice;

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;