import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import FriendList from './FriendList';

const Contact = (props) => {
  const [searchText, setSearchText] = useState('');
  const chatList = useSelector((state) => state.chatReducer.chatList);

  let filteredChatList = chatList;
  if (searchText) {
    filteredChatList = chatList.filter((chatRoom) => {
      if (chatRoom.friend_name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      return false;
    });
  }

  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card">
          <SearchBar setSearchText={setSearchText} />
          <FriendList chatList={filteredChatList} />
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
