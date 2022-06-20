import React from 'react';
import './Roadmap.scss';

// Roadmap images
import Q4 from '../../assets/images/Q4.png';
import Q3_2021 from '../../assets/images/Q3_2021.png';
import Q3 from '../../assets/images/q3.png';
import Q2 from '../../assets/images/q22022.png';
import Q1 from '../../assets/images/q12022.png';
import Q22 from '../../assets/images/q22022.png';
import Q32 from '../../assets/images/q32022.png';
import Q42 from '../../assets/images/q42022.png';
import Q13 from '../../assets/images/q12022.png';


// Roadmap characters images
import char1 from '../../assets/char/good.png';
import char2 from '../../assets/char/evil.png';
import char3 from '../../assets/char/char-3.png';
import char4 from '../../assets/char/char-4.png';
import char5 from '../../assets/char/char-5.png';


const Roadmap = () => {
  return (
    <>
      <section className="roadmapSection" id="roadmap">
        <div className="roadmapContainer">
          <div className="roadmapTitle" data-aos="fade-up">
            <h1>Roadmap</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar1 roadmapChar">
                  <img src={char1} alt="char1" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q3_2021} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar2 roadmapChar">
                  <img src={char2} alt="char2" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q4} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar3 roadmapChar">
                  <img src={char3} alt="char3" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q1} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar5 roadmapChar">
                  <img src={char4} alt="char5" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q22} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>
            

            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar5 roadmapChar">
                  <img src={char1} alt="char5" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q32} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="roadmapQuestCon">
             
            </div>
            
            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar5 roadmapChar">
                  <img src={char3} alt="char5" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q42} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmapQuestCon">
             
             </div>
            <div className="roadmapQuestCon">
              <div className="outerImgContainer">
                <div className="roadmapChar5 roadmapChar">
                  <img src={char5} alt="char5" />
                </div>
                <div className="innerImgContainer">
                  <div className="imgContainer">
                    <img src={Q13} alt="roadmap Q4" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default Roadmap;
