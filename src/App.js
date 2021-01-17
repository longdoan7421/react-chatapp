import React from 'react';
import ChatContainer from './Containers/ChatContainer';
import ContactContainer from './Containers/ContactContainer';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <ContactContainer />
        <ChatContainer />
      </div>
    </div>
  );
};

export default App;
