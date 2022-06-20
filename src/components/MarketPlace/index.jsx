import React from 'react';
import './MarketPlace.scss';

// Components
import Header from './Header/Header';
import CardContainer from './CardContainer/CardContainer';

const index = () => {
  return (
    <>
      <div className="marketPlaceSection">
        <Header />
        <CardContainer />
      </div>
    </>
  );
};

export default index;
