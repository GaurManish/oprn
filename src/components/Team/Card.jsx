import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="cardContainer" data-aos="fade-up">
        <div className="imgContainer">
          <img src={props.img} alt="akash" />
        </div>
        <div className="textContainer">
          <div className="name">
            <h1>{props.name}</h1>
          </div>
          <div className="role">
            <h1>{props.role}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
