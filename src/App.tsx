import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    return await Axios.get(`${process.env.REACT_APP_API_URL}/get-info`).then((res) => {
      setName(res?.data?.data[0]?.name);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}!</h1>
        <p>This is a sample app for a deployment purpose</p>
      </header>
    </div>
  );
}

export default App;
