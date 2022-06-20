import React from 'react';
import './CardContainer.scss';

// Components
import Card from './Card';

// Images
import WrathSaber from '../../../assets/mrktCards/WrathSaber.png';
import Jack from '../../../assets/mrktCards/Jack.png';
import Catress from '../../../assets/mrktCards/Catress.png';
import PrinceXion from '../../../assets/mrktCards/Princ Xion.png';
import card5 from '../../../assets/mrktCards/card-5.png';
import card6 from '../../../assets/mrktCards/card-6.png';
import card7 from '../../../assets/mrktCards/card-7.png';
import card8 from '../../../assets/mrktCards/card-8.png';

const CardContainer = () => {
  return (
    <div>
      <section className="cardsSection">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card img={WrathSaber} cardName="WrathSaber #34577" />
          <Card img={Jack} cardName="Jack #34632" />
          <Card img={Catress} cardName="Catress #12634" />
          <Card img={PrinceXion} cardName="Prince Xion #17644" />
          <Card img={card5} cardName="Glinter #18244" />
          <Card img={card6} cardName="Pheonix  #16944" />
          <Card img={card7} cardName="Bibidi  #17429" />
          <Card img={card8} cardName="Gray  #77644" />
        </div>
      </section>
    </div>
  );
};

export default CardContainer;
