import React from "react";
import "./Notificate.css";
import Ava from "../../images/ava.png";
export default class Notificate extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Уведомления <span className="counter"> 4</span>
        </h4>
        <div className="notification-content">
          <p className="employeer notification">
            <img src={Ava} alt="employeer" className="company-avatar" />
            <b>Владимиров Владимир</b> <data>9:20</data>
          </p>
          <p className="text">
            Подготовить обновлённую презентацию разработанного продукта
          </p>{" "}
          <p className="employeer notification">
            <img src={Ava} alt="employeer" className="company-avatar" />
            <b>Владимиров Владимир</b> <data>9:20</data>
          </p>
          <p className="text">
            Презентация IT-отдела, Улучшение мобильной платёжной системы.
          </p>{" "}
        </div>
        <h4 className="title">Уведомления →</h4>
      </div>
    );
  }
}
