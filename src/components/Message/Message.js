import './Message.css';

export const Message = (props) => {
    const responderStyle = {
        margin: '10px auto 10px 0',
        textAlign: 'left'
    }
    return (
        <div className='message-container' style={props.responder ? responderStyle :
        {}}>
            {props.responder && <span className="message-responders-name">
                {props.responder}</span>}
            <div className='message-body' style={props.responder ?
                 {backgroundColor: 'lightgrey', color: '#000'} : {}}>
                <span>{props.body}</span>
            </div>
            <span className="message-time">{props.time}</span>
        </div>
    )
}

export default Message;