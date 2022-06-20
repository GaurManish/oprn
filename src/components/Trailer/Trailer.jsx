import React from 'react';
import ReactPlayer from 'react-player';
import './Trailer.scss';

const Trailer = () => {
  return (
    <>
      <section className="trailerSection" id="trailer">
        <div className="trailerTitle" data-aos="fade-up">
          <h1> Game Trailer</h1>
        </div>
        <div className="trailerVideo">
          <div className="player-wrapper" data-aos="fade-up">
            <ReactPlayer
              className="react-player"
              url="https://player.vimeo.com/video/620109402?h=c8d2e61010"
              width="100%"
              controls={true}
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Trailer;
