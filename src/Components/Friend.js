import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from './UserInfo';
import { changeRoom } from '../Actions/chatAction';

const Friend = (props) => {
  const dispatch = useDispatch();
  const currentRoomId = useSelector((state) => state.chatReducer.currentRoomId);

  return (
    <li
      className={props.roomInfo.room_id === currentRoomId ? 'active' : ''}
      onClick={(e) => dispatch(changeRoom(props.roomInfo.room_id))}
    >
      <UserInfo roomInfo={props.roomInfo} isShowOnlineStatus />
    </li>
  );
};

export default Friend;
