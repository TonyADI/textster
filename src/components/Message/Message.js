import './Message.css';

export const Message = (props) => {
    const responderStyle = {
        margin: '10px auto 10px 0'
    }
    return (
        <div className='message-container' style={props.responder ? responderStyle :
        {}}>
            {props.responder}
            <div className='message-body' style={props.responder ?
                 {backgroundColor: 'lightgrey', color: '#000'} : {}}>
                <span>{props.body}</span>
            </div>
            <span>{props.time}</span>
        </div>
    )
}

export default Message;