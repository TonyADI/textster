import { configureStore } from '@reduxjs/toolkit';
import messageListReducer from './components/MessageList/MessageListSlice';
import dateReducer from './components/Date';

export default configureStore({
    reducer: {
      messageList: messageListReducer,
      date: dateReducer
    },
  });