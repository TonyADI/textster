import { createSlice } from '@reduxjs/toolkit';
import { message } from './MessageList';
export const messageListSlice = createSlice({
    name: 'messageList',
    initialState: [],
    reducers: {
        addMessage: (state:message[], action:{type:string;payload:message}) => {
            state.push(action.payload);
        },
        removeMessage: (state:message[], action:{type:string;payload:message}) => {
            state.filter(message => message !== action.payload)
        }
    }
})

export const selectMessageList = (state: { messageList: string[]; }) => state.messageList;

export const {addMessage, removeMessage} = messageListSlice.actions;

export default messageListSlice.reducer;