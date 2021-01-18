import React from "react";
import "./Notificate.scss";

export default class Notificate extends React.Component {
  render() {
    const time =
      new Date().getHours() +
      ":" +
      (new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes());
    const notificate = [
      {
        avatar: "/images/ava.png",
        name: "Владимиров Владимир",
        title: "назначает вам задачу",
        text: "Подготовить обновлённую презентацию разработанного продукта",
        time: time,
      },
      {
        avatar: "/images/ava.png",
        name: "Владимиров Владимир",
        title: "создает событие",
        text: "Презентация IT-отдела, Улучшение мобильной платёжной системы.",
        time: time,
      },
      {
        avatar: "/images/ava.png",
        name: "Владимиров Владимир",
        title: "создает событие",
        text: "Презентация IT-отдела, Улучшение мобильной платёжной системы.",
        time: time,
      },
      {
        avatar: "/images/ava.png",
        name: "Владимиров Владимир",
        title: "создает событие",
        text: "Презентация IT-отдела, Улучшение мобильной платёжной системы.",
        time: time,
      },
      {
        avatar: "/images/ava.png",
        name: "Владимиров Владимир",
        title: "создает событие",
        text: "Презентация IT-отдела, Улучшение мобильной платёжной системы.",
        time: time,
      },
    ];
    return (
      <div className="requests notificate" id={this.props.id}>
        <h4 className="title">
          Уведомления <span className="counter"> 1</span>
        </h4>
        <div className="notification-content">
          {notificate.map((task,id) => (
            <div className="task-list" key={id}>
              {" "}
              <img className="avatar" src={task.avatar} />
              <h3 className="employee-name">
                {" "}
                {task.name} <span className="data">{task.time}</span>
              </h3>
              <span
                className="counter" 
              >
                {task.title}
              </span>
              <p className="text">{task.text}</p>
              <hr />
            </div>
          ))}
        </div>
        <a className="title link">Уведомления →</a>
      </div>
    );
  }
}
