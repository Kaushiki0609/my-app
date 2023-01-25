import React from 'react';

function Card({person}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h2>{person.AccountNumber}</h2>
        <p>{person.AccountName}</p>
        <p>{person.CustodianUser}</p>
        <p>{person.CreationDate}</p>
      </div>
    </div>
  );
}

export default Card;