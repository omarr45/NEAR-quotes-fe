import './Quotes.css';

import React from 'react';

export default function Quotes({ quotes }) {
  return (
    <div className='quotes'>
      {quotes.map((q, i) => (
        <div className='quote' key={i}>
          <p>
            <strong>{q.quote}</strong>
          </p>
          <p className='signature'>Added by: {q.writer}</p>
        </div>
      ))}
    </div>
  );
}
