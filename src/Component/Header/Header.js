import React from "react";
import logo from "../../images/Logo.png";
import avatar from "../../images/avatar.png";
import "./Header.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header" >
        <div className="grid-item">
          <img src={logo} alt="fanki" className="logo" />
        </div>
        <div className="grid-item">
          <p className="info-window"> сообщений нет</p>
        </div>
        <div className="grid-item">
          <p className="admin-name">
            Александров Александр{" "}
            <span className="avatar-circle">
              {" "}
              <img src={avatar} alt="avatar" className="avatar" />
            </span>
       
          </p>   
          <p className="admin-name">Frontend разработчик </p> 

        </div>  <div className="grid-item">   <span>˅</span></div>
     
      </div>
    );
  }
}
