import './Message.css';

export const Message = (props:{body:string;responder?:string;time:string}) => {
    const responderStyle = {
        margin: '10px auto 10px 0',
        backgroundColor: 'lightgrey'
    }
    return (
        <div className='message-container' style={props.responder ? responderStyle :
        {}}>
            {props.responder}
            <div className='message-body'>
                <span>{props.body}</span>
            </div>
            <span>{props.time}</span>
        </div>
    )
}

export default Message;