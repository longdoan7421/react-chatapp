import React from 'react';
import UserInfo from './UserInfo';
import ActionMenu from './ActionMenu';

const ChatHeader = (props) => {
  return (
    <div className="card-header msg-head">
      <UserInfo roomInfo={props.currentRoom} />
      <ActionMenu roomId={props.currentRoom.room_id} />
    </div>
  );
};

export default ChatHeader;
