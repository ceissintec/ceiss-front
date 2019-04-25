import React from 'react';
import { Link } from 'react-router-dom';

// styled components
import Hero from '../styles/Hero';
import Banner from '../styles/Banner';
import LinkWrapper from '../styles/LinkWrapper';
import SVG from '../styles/SVG';
import RotatingDiv from '../styles/RotatingDiv';
//Assets
import ReactLogo from '../res/react-logo.svg';
import VueLogo from '../res/vue-logo.svg';
import KuberLogo from '../res/kuber-logo.svg';

// const
function MainPage() {
  return (
    <>
      <Hero>
        <Banner>CEISS</Banner>
        <LinkWrapper>
          <Link to="/lightning-talks">Lightning Talks</Link>
        </LinkWrapper>
        <SVG x="20%" y="70%">
          <RotatingDiv duration="5s">
            <img src={ReactLogo} alt="React logo spinner" />
          </RotatingDiv>
        </SVG>
        <SVG duration="8s" x="60%" y="8%">
          <RotatingDiv duration="10s">
            <img src={ReactLogo} alt="Reactjs logo" />
          </RotatingDiv>
        </SVG>
        <SVG x="5%" y="10%" duration="5s">
          <img src={VueLogo} alt="vuejs logo" />
        </SVG>
        <SVG x="80%" y="70%" duration="5s">
          <img src={KuberLogo} alt="vuejs logo" />
        </SVG>
      </Hero>
    </>
  );
}

export default MainPage;
