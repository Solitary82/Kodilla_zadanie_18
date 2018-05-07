import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.css';

const Message = (props) => {
    return (
        <div className={styles.Message}>
            <strong>{props.from}: </strong>
            <span>{props.text}</span>
        </div>
    );
};

const MessageList = (props) => {
    return (
        <div className={styles.MessageList}>
            {props.messages.map((message, i) => {
                return <Message key={i} from={message.from} text={message.text} />;
            })}
        </div>
    );
};

MessageList.propTypes = {
    messages: PropTypes.string
};

Message.propTypes = {
    from: PropTypes.string,
    text: PropTypes.string
};

export default MessageList;