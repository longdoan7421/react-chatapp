import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { selectCurrentRoom } from '../Reducers/chatReducer';

const Chat = (props) => {
  const currentRoom = useSelector((state) => selectCurrentRoom(state));
  const myUserId = useSelector((state) => state.chatReducer.myUserId);

  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <ChatHeader currentRoom={currentRoom} />
        <ChatBody currentRoom={currentRoom} myUserId={myUserId} />
        <ChatFooter myUserId={myUserId} />
      </div>
    </div>
  );
};

export default Chat;
