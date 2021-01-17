import React from 'react';

const userAvatar = 'https://www.w3schools.com/w3images/avatar2.png';

const ChatMessage = (props) => {
  let time = new Date(+props.time).toLocaleString();

  if (props.myUserId === props.user_id) {
    return (
      <div className="d-flex justify-content-end mb-4">
        <div className="msg_cotainer_send">
          {props.message}
          <span className="msg_time_send">{time}</span>
        </div>
        <div className="img_cont_msg">
          <img src={userAvatar} className="rounded-circle user_img_msg" alt="avatar" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
          <img src={props.avatar} className="rounded-circle user_img_msg" alt="partner avatar" />
        </div>
        <div className="msg_cotainer">
          {props.message}
          <span className="msg_time">{time}</span>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
