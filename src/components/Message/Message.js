import './Message.css';

export const Message = (props) => {
    return (
        <div className='message-container' style={{margin: props.responder ? 
        '10px auto 10px 0' : 'default'}}>
            {props.responder}
            <div className='message-body'>
                <span>{props.body}</span>
            </div>
            <span>{props.time}</span>
        </div>
    )
}

export default Message;