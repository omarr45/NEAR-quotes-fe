import './App.css';

import React, { useEffect, useState } from 'react';

import Form from './components/Form';
import Quotes from './components/Quotes';
import SignIn from './components/SignIn';

window.Buffer = window.Buffer || require('buffer').Buffer;

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    contract.fetchQuotes().then(setQuotes);
  }, [contract]);

  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, quote } = e.target.elements;

    fieldset.disabled = true;

    contract.addQuote({ quote: quote.value }).then(() => {
      contract.fetchQuotes().then((quotes) => {
        setQuotes(quotes);
        quote.value = '';
        fieldset.disabled = false;
        quote.focus();
      });
    });
  };

  const signIn = () => {
    wallet.requestSignIn(
      {
        contractId: nearConfig.contractName,
        methodNames: [contract.addQuote],
      },
      'The Quotes Notebook'
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <main>
      <header>
        <h1>The Quotes Notebook</h1>
        {currentUser ? (
          <button onClick={signOut}>Log out</button>
        ) : (
          <button onClick={signIn}>Log in</button>
        )}
      </header>
      {currentUser ? (
        <Form onSubmit={onSubmit} currentUser={currentUser} />
      ) : (
        <SignIn />
      )}
      {!!currentUser && !!quotes.length && <Quotes quotes={quotes} />}
    </main>
  );
};

export default App;
