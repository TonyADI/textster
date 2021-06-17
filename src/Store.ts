import { configureStore } from '@reduxjs/toolkit';
import messageListReducer from './components/MessageList/MessageListSlice';

export default configureStore({
    reducer: {
      messageListReducer: messageListReducer
    },
  });