import { useSelector } from 'react-redux';
import { selectMessageList  } from './MessageListSlice.js';
import Message from '../Message/Message.js';
import './MessageList.css';

export interface message {
    body: string;
    time: string;
    responder?:string;
}
const MessageList = (props: {messages:message[]}) => {
    const messagelist:message[] = useSelector(selectMessageList);
    return (
        <div className='messagelist-container'>
            <Message body={'haha'} time={'1:20 pm'}/>
            <Message body={'ohoh'} responder={'John'} time={'1:22 pm'}/>
            <Message body={'ohoh'} time={'1:24 pm'}/>
            <Message body={'Sheesh this p is longgg'} time={'1:30 pm'} responder={'Polo G.'}/>
            <Message body={`Very very very very very very veru veru very longgggggggg very very very very
            long ass message`} time={'1:33 pm'}/>
            {messagelist.map(message => <Message body={message.body} time={message.time}
            responder={message.responder} />)}
        </div>
    )
}

export default MessageList;