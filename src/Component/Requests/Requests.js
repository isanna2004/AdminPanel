import React from "react";
import "./Requests.css";
import Slider from "../Slider/Slider";

export default class Requests extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Запросы <span className="counter"> 1</span>
        </h4>{" "}
        <div className="content">
          <Slider
            slideFirst={
              <div className="text">
                <p>
                  У вас
                  <span className="counter">2 несогласованных запроса </span> от
                  сотрудников: <b>Петров Алексей</b> и <b> Шишкин Егор</b>
                </p>{" "}
              </div>
            }
            slideSecond={
              <div className="text">
                <p>
                  <b>Ваш запрос на больничный </b> от
                  <p>20 августа, 09:00 - 21 августа 18:00</p>
                  <span
                    className="counter"
                    style={{
                      color: "#27AE60",
                      backgroundColor: "rgba(39, 174, 96, 0.1)",
                    }}
                  >
                    согласован
                  </span>
                </p>{" "}
              </div>
            }
          />
        </div>
        <h4 className="title">Запросы →</h4>
      </div>
    );
  }
}
