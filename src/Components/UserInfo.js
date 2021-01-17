import React from 'react';

const UserInfo = (props) => {
  const calculateLeftTime = (time) => {
    return Math.floor((Date.now() - time) / 60000);
  };

  let firstName = props.roomInfo.friend_name.split(' ')[0];
  let leftTime = calculateLeftTime(props.roomInfo.left_time);

  return (
    <div className="d-flex bd-highlight">
      <div className="img_cont">
        <img src={props.roomInfo.avatar} className="rounded-circle user_img" alt="partner avatar" />
        <span className={`online_icon ${props.roomInfo.is_online ? '' : 'offline'}`}></span>
      </div>
      <div className="user_info">
        {props.isShowOnlineStatus ? (
          <div>
            <span>{props.roomInfo.friend_name}</span>
            <p>
              {props.roomInfo.is_online
                ? `${firstName} is online.`
                : `${firstName} left ${leftTime} minutes ago.`}
            </p>
          </div>
        ) : (
          <div>
            <span>Chat with {props.roomInfo.friend_name}</span>
            <p>{props.roomInfo.messages.length} Messages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
