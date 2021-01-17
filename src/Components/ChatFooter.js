import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../Actions/chatAction';

const ChatFooter = (props) => {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const sendChatMessage = () => {
    if (!messageText) {
      return;
    }

    let now = new Date().getTime();
    dispatch(sendMessage(messageText, now, props.myUserId));
    setMessageText('');
  };

  return (
    <div className="card-footer">
      <div className="input-group">
        <textarea
          className="form-control type_msg"
          placeholder="Type your message..."
          style={{ marginTop: 0, marginBottom: 0, height: 81 }}
          value={messageText}
          onChange={(e) => {
            setMessageText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key === 'Enter') {
              // send message when user presses shift + enter
              e.preventDefault();
              sendChatMessage();
            }
          }}
        ></textarea>
        <div className="input-group-append">
          <button type="button" className="input-group-text send_btn" onClick={sendChatMessage}>
            <i className="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
