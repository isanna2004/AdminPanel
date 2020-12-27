import React from "react";
import "./Requests.scss";
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
                  <span className="counter">2 несогласованных запроса</span> <br/>
                   от сотрудников: <b>Петров Алексей</b> и <b> Шишкин Егор</b>
                </p>{" "}
              </div>
            }
            slideSecond={
              <div className="text">
                <p className="text-agreement">
                  <b>Ваш запрос на больничный </b> 
                  <p>от 20 августа, 09:00 - 21 августа 18:00</p>
                  <span
                    className="counter"
                  >
                    согласован
                  </span>
                </p>{" "}
              </div>
            }
          />
        </div>
        <a className="title link">Запросы →</a>
      </div>
    );
  }
}
