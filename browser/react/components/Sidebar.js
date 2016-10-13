'use strict';

import React from 'react';
import {Link} from 'react-router';

export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <Link to="/albums">ALBUMS</Link>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <Link to="/artists">ARTISTS</Link>
      </h4>
    </section>
  </sidebar>
);
