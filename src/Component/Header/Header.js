import React from "react";
import Icon from "react-eva-icons";
import { KeyboardArrowDown } from "@material-ui/icons";
import "./Header.scss";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src="/images/Logo.png" alt="fanki" className="logo-img" />
        </div >
        <hr className="line" />
      <div className="admin-name">
        <p className="info-window">
          {" "}
          <Icon name="bell-outline" size="large" fill=" #959595" /> Cообщений
          нет
        </p>
        <hr className="line" />
       
          {" "}
          <p>
            <b> Александров Александр</b>
            <p className="employee-position">Генеральный директор</p>
          </p>
          <span className="avatar">
            <img src="/images/avatar.svg" alt="avatar" className="avatar" />
          </span>
          <KeyboardArrowDown />
        </div>
      </header>
    );
  }
}
