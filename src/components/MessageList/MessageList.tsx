import Message from '../Message/Message.js';
import './MessageList.css';

export interface message {
    body: string;
    time: string;
    responder?:string;
}
const MessageList = (props: {messages:message[]}) => {
    return (
        <div className='messagelist-container'>
            <Message body={'haha'} time={'1:20pm'}/>
            <Message body={'ohoh'} responder={'John'} time={'1:22pm'}/>
            <Message body={'ohoh'} time={'1:24pm'}/>
            <Message body={'Sheesh this p is longgg'} time={'1:30pm'} responder={'Polo G.'}/>
            <Message body={`Very very very very very very veru veru very longgggggggg very very very very
            long ass message`} time={'1:33pm'}/>
        </div>
    )
}

export default MessageList;