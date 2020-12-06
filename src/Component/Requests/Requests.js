import React from "react";
import "./Requests.css";
export default class Requests extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Запросы <span className="counter"> 1</span>
        </h4>
        <div className="content">
          <span className="arrows"> &lt; </span>{" "}
          <p className="text">
            У вас <span className="counter">2 несогласованных запроса </span> от
            сотрудников: <b>Петров Алексей</b> и<b> Шишкин Егор</b>
          </p>{" "}
          <span className="arrows">&gt;</span>
        </div>
        <div className="dots">
          <span>• •</span>
          <h4 className="title">Запросы →</h4>
        </div>
      </div>
    );
  }
}
