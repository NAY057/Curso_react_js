import React from "react";
import './styles/NotFound.css'
import PlatziConfLogo from '../images/platziconf-logo.svg'
function NotFound() {
  return (
    <div className="container-notfound">
      <div className="col-notfound">
      <img src={PlatziConfLogo} alt=""/>
      <h1 className='mt-4'>404: Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
