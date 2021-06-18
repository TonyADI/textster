import React from 'react';
import InputBar from './components/InputBar/InputBar';
import MessageList from './components/MessageList/MessageList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='chat-body'>
        <MessageList />
        <InputBar />
      </div>
    </div>
  );
}

export default App;
