import React, { Component } from 'react';
import './App.css';
import ChatContainer from './Containers/ChatContainer';
import ContactContainer from './Containers/ContactContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid h-100">
      	<div className="row justify-content-center h-100">
          <ContactContainer />
          <ChatContainer />
      	</div>
      </div>
    );
  }
}

export default App;
