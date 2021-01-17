import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatBody = (props) => {
  const cardBodyRef = useRef();

  useEffect(() => {
    const cardBodyElement = cardBodyRef.current;
    cardBodyElement.scrollTop = cardBodyElement.scrollHeight;
  });

  return (
    <div className="card-body msg_card_body" ref={cardBodyRef}>
      {props.currentRoom.messages.map((message, index) => (
        <ChatMessage
          key={index}
          {...message}
          avatar={props.currentRoom.avatar}
          myUserId={props.myUserId}
        />
      ))}
    </div>
  );
};

export default ChatBody;
