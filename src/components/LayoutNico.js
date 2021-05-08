import React from 'react';

import Navbar from './NavbarNico.js';

function Layout(props) {
  // const children = props.children;

  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;