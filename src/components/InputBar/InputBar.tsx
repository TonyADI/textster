import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../MessageList/MessageListSlice';
import { changeDate, selectDate } from '../Date/DateSlice';
import './InputBar.css';

const InputBar = (props:any) => {
    const [term, setTerm] = useState('');
    const savedDay = useSelector(selectDate);
    const dispatch = useDispatch();

    const handleChange = (e:any):void => {
        setTerm(e.target.value);
    }
    const sendMessage = ():void => {
        if(term){
            setCurrentDate();
            const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            const message = {body: term, time: time}
            dispatch(addMessage(message));
            setTerm('');
        }
    }

    const setCurrentDate = ():void => {
        const date = new Date();
        const currentDay = date.getDay();
        if(currentDay !== savedDay){
            const currentDate = date.toUTCString().slice(0, 12);
            dispatch(changeDate(currentDay))
            dispatch(addMessage(currentDate));
        }
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