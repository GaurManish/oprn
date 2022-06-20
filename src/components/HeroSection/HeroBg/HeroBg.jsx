import React from 'react';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import './HeroBg.scss';

import mobileVid from '../../../assets/mobileVid.mp4';

export default function HeroBg() {
  return (
    <>
      <div className="heroBg">
        <div className="bgImg">
          <div className="topShade"></div>
          <div
            className="sm:hidden"
            style={{ width: '100vw', height: '100vh' }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                transform: 'translate(-50% , -50%)',
                objectFit: 'cover',
                zIndex: '-1',
              }}
            >
              <source src={mobileVid} type="video/mp4" />
            </video>
          </div>
          <div className="hidden sm:block">
            <VideoContainer>
              <Video
                background={true}
                height={1080}
                loop={true}
                responsive
                video="https://player.vimeo.com/video/610014417?h=80d3f38fde"
                width={1920}
              />
            </VideoContainer>
          </div>
        </div>
      </div>
    </>
  );
}

const VideoContainer = styled.div`
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Video = styled((props) => <Vimeo {...props} />)`
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  left: 50%;
  min-height: 100vh;
  min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
`;
