import React from 'react';
import './Overview.scss';

const Overview = () => {
  return (
    <>
      <section className="overviewInfo" id="overview">
        <div className="innerOverviewContainer">
          <div className="infoContainer">
            <div className="overviewTitle" data-aos="fade-up">
              <h1>Overview</h1>
            </div>
            <div className="overviewDesc">
              <h3 data-aos="fade-up">
                Operon Origins is the first NFT card-based combat game with an
                Epic art style that pushes the boundaries of competitive NFT
                Games. It is an opportunity for players from all genres to
                experience a different world through the innovative features of
                the games and characters of the cards.
              </h3>
              <h3 data-aos="fade-up">
                Operon Origins has identified the hunger for visually astounding
                NFT games and thus presents an opportunity for players to own
                their digital collectibles, giving them the freedom to hold,
                sell and transfer the collectibles any time they wish.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
