import './App.css';

import { useEffect, useState } from 'react';

// import { contract } from './configMe';

function App() {
  useEffect(() => {
    // contract.listWritings.then(console.log);
    // fetchItems();
  }, []);

  const [messages, setMessages] = useState([]);

  const updateMessage = (e) => {
    e.preventDefault();
    const msg = document.getElementById('message').value;

    // send the message to NEAR
    setMessages([...messages, ` ${msg}`]);
  };

  const login = (e) => {
    e.preventDefault();

    // get message from NEAR and display it
    setMessages(['Retrieving message...']);
  };

  return (
    <div className='App'>
      <div className='container'>
        <form>
          <input
            type='text'
            name='message'
            id='message'
            placeholder='Enter a new message'
          />
          <button type='submit' onClick={updateMessage}>
            Send message
          </button>
          <button type='submit' onClick={login}>
            Login with NEAR wallet
          </button>
        </form>
        <div className='message'>
          <p>{messages}</p>
        </div>
        <p className='footer'>Made with 💖 by Omar</p>
      </div>
    </div>
  );
}

export default App;
