import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../Actions/chatAction';

const ActionMenu = (props) => {
  const dispatch = useDispatch();
  const [isDisplayActionMenu, setIsDisplayActionMenu] = useState(false);

  const toggleActionMenu = () => {
    setIsDisplayActionMenu((prevState) => !prevState);
  };

  const deleteChatRoom = () => {
    toggleActionMenu();
    dispatch(deleteRoom(props.roomId));
  };

  return (
    <div>
      <span id="action_menu_btn" onClick={toggleActionMenu}>
        <i className="fas fa-ellipsis-v"></i>
      </span>
      <div className="action_menu" style={{ display: isDisplayActionMenu ? 'block' : 'none' }}>
        <ul>
          <li onClick={deleteChatRoom}>
            <i className="fas fa-trash"></i> Delete chat room
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActionMenu;
