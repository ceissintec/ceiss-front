import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">CEISS INTEC</div>
      </div>
      <div className="navbar-end">
        <div className="buttons">
          <Link to="/lightning-talks" className="button is-light">
            Lighting Talks
          </Link>
        </div>
      </div>
    </nav>
  );
}
