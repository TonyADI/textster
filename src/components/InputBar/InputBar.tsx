import { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { addMessage } from '../MessageList/MessageListSlice';
import './InputBar.css';

const InputBar = (props:any) => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e:any):void => {
        setTerm(e.target.value);
    }
    const sendMessage = () => {
        dispatch(addMessage(term));
        setTerm('');
    }
    const handleKeyPress = (e:any):void => {
        if(e.which === 13){
            sendMessage();
        }
    }
    return(
        <div>
            <div className='inputBar-container'>
                <input placeholder='Write a message...' value={term} 
                onChange={handleChange} className='inputBar'
                onKeyPress={handleKeyPress}/>
                <button className='send-button' onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default InputBar;