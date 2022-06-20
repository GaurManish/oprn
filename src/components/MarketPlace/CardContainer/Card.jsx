import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardImg">
          <img src={props.img} alt="fire" />
        </div>
        <div className="cardTitle">
          <h1>{props.cardName}</h1>
        </div>
        <div className="commingSoon">
          <button>Coming Soon</button>
        </div>
      </div>
    </>
  );
};

export default Card;
