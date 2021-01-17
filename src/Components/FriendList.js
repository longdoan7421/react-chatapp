import React from 'react';
import Friend from './Friend';

const FriendList = (props) => {
  return (
    <div className="card-body contacts_body">
      <ul className="contacts">
        {props.chatList && props.chatList.map((room) => (
          <Friend key={room.room_id} roomInfo={room} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
