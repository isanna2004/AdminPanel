import React from "react";

import { KeyboardArrowDown } from "@material-ui/icons";
import "./Header.scss";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src="/images/Logo.png" alt="fanki" className="logo-img" />
        </div>
        <hr className="line" />
        <p className="info-window"> сообщений нет</p>
        <hr className="line" />
        <p className="admin-name">
          <b> Александров Александр</b>
          <br />
          Frontend разработчик{" "}
        </p>
        <span>
          <img src="/images/avatar.png" alt="avatar" className="avatar" />
        </span>

        <KeyboardArrowDown />
      </header>
    );
  }
}
