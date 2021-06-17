import React from 'react';
import MessageList from './components/MessageList/MessageList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='chat-body'>
        <MessageList />
      </div>
    </div>
  );
}

export default App;
