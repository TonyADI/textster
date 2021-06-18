import { createSlice } from '@reduxjs/toolkit';

export const messageListSlice = createSlice({
    name: 'messageList',
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            return [...state, action.payload];
        },
        removeMessage: (state, action) => {
            return state.filter(message => message !== action.payload)
        }
    }
})

export const selectMessageList = (state) => state.messageList;

export const {addMessage, removeMessage} = messageListSlice.actions;

export default messageListSlice.reducer;