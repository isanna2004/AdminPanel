import React from "react";
import "./Notificate.css";

export default class Notificate extends React.Component {
  render() {
    return (
      <div className="requests notificate" id={this.props.id}>
        <h4 className="title">
          Уведомления <span className="counter"> 1</span>
        </h4>
        <div className="notification-content">
          <div className="text">
            {" "}
            <p>
              {" "}
              <img className="avatar" src="/images/ava.png" />
              <b>Владимиров Владимир </b> 9:22
            </p>
            <span
              className="counter"
              style={{
                color: " #2F80ED",
                backgroundColor: " rgba(45, 156, 219, 0.1)",
              }}
            >
              назначает вам задачу
            </span>
            <p>Подготовить обновлённую презентацию разработанного продукта</p>
          </div>
          <hr />

          <div className="text">
            {" "}
            <p>
              {" "}
              <img className="avatar" src="/images/ava.png" />
              <b>Владимиров Владимир </b> 9:22
            </p>
            <span
              className="counter"
              style={{
                color: " #2F80ED",
                backgroundColor: " rgba(45, 156, 219, 0.1)",
              }}
            >
              создает событие
            </span>
            <p>Презентация IT-отдела, Улучшение мобильной платёжной системы.</p>
          </div>
        </div>{" "}
        <a className="title link">Уведомления →</a>
      </div>
    );
  }
}
