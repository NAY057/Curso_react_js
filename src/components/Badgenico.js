import React from "react";
import logoHeader from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "./Gravatar";

class Badgenico extends React.Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter, email } = this.props;
    return (
      <div className="Badge">

        <div className="Badge__header">
          <img src={logoHeader} alt="img header" />
        </div>

        <div className="Badge__section-name">
        <Gravatar className="Badge__avatar" email={email} />
          <h1>
            {firstName} <br />
            {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <a href="www.youtube.com">@{twitter}</a>
        </div>

        <div className="Badge__footer">
          <p>#VamosContodaReact</p>
        </div>
      </div>
    );
  }
}

export default Badgenico;
