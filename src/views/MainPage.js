import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

// styled components
import MainPageHeader from '../styles/MainPageHeader';
import Banner from '../styles/Banner';
import LinkWrapper from '../styles/LinkWrapper';

function MainPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="columns is-centered">
      <div className="column">
        <MainPageHeader>
          <animated.div style={props}>
            <Banner>CEISS INTEC</Banner>
          </animated.div>
          <LinkWrapper>
            <animated.div style={props}>
              <Link to="/lightning-talks">Lightning Talks</Link>
            </animated.div>
          </LinkWrapper>
        </MainPageHeader>
      </div>
    </div>
  );
}

export default MainPage;
