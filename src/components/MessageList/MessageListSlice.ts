import { createSlice } from '@reduxjs/toolkit';

export const messageListSlice = createSlice({
    name: 'messageList',
    initialState: [],
    reducers: {
        addMessage: (state:string[], action:{type:string;payload:string}) => {
            state.push(action.payload);
        },
        removeMessage: (state:string[], action:{type:string;payload:string}) => {
            state.filter(message => message !== action.payload)
        }
    }
})

export const selectMessageList = (state: { messageList: string[]; }) => state.messageList;

export const {addMessage, removeMessage} = messageListSlice.actions;

export default messageListSlice.reducer;