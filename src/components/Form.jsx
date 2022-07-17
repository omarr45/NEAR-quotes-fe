import './Form.css';

import React from 'react';

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id='fieldset'>
        <p>
          Add your favorite quote,{' '}
          <bdi style={{ fontWeight: 'bold' }}>{currentUser.accountId}</bdi>!
        </p>
        <p className='highlight'>
          <label htmlFor='quote'>Quote:</label>
          <input autoComplete='off' autoFocus id='quote' required />
        </p>
        <button type='submit'>Add</button>
      </fieldset>
    </form>
  );
}
