import React from 'react';
import Clock from './Clock';
import ActionLink from './ActionLink';
import Toggle from './Toggle';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Login from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React' ];
  return (
    <div className="App">
      <FlavorForm />
      <EssayForm />
      <NameForm />
      <Clock />
      <ActionLink />
      <Toggle />
      <Login />
      <Mailbox unreadMessages={messages} />
      <Page />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
