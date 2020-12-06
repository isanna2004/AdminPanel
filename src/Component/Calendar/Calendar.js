import React from "react";
import "./Calendar.css";
export default class Calendar extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Календарь <span className="counter"> 1</span>
        </h4>
        <div className="content">
          <span className="arrows"> &lt; </span>{" "}
          <p className="text">10:00 - 11:00 | Групповое событие
          <p><b>Презентация мобильной системы</b></p></p>{" "}
          
          <span className="arrows">&gt;</span>
        </div>
        <div className="dots">
          <span>• •</span>
          <h4 className="title">Календарь →</h4>
        </div>
      </div>
    );
  }
}
