import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.h2.attrs({ className: 'has-text-centered' })`
  font-family: 'Poppins', Helvetica;
  font-size: 8em;
  margin-top: 0em;
`;

const LinkWrapper = styled.div.attrs({ className: 'has-text-centered' })`
  font-family: 'Poppins';
  font-size: 4em;
  margin: 1em 0 1em 0;
`;

const MainPage = () => (
  <div className="columns is-centered">
    <div className="column">
      <Banner>CEISS INTEC</Banner>
      <LinkWrapper>
        <Link to="/lightning-talks">Lightning Talks</Link>
      </LinkWrapper>
    </div>
  </div>
);

export default MainPage;
