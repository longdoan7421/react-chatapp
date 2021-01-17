import React from 'react';
import Chat from './Components/Chat';
import Contact from './Components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
        <Chat />
        <Contact />
      </div>
    </div>
  );
};

export default App;
