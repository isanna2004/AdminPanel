import React from "react";
import "./Requests.scss";
import Slider from "../Slider/Slider";

export default class Requests extends React.Component {
  state={
    status:""
  }
  render() {
    const status = [
      { title: "Согласован", color: "rgba(39, 174, 96, 0.5)" },
      { title: "Отклонен", color: "" },
      { title: "На рассмотрении", color: "" },
    ];

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
                  {" "}
                  У вас
                  <span className="counter">2 несогласованных запроса</span>
                  <br />
                  от сотрудников: <b>Петров Алексей</b> и <b> Шишкин Егор</b>
                </p>
              </div>
            }
            slideSecond={
              <div className="text">
                <b className="text-agreement">Ваш запрос на больничный </b>
                от 20 августа, 09:00 - 21 августа 18:00 <br/>
                {
                  <span className="counter" style={{ background: status[0].color }}>
                    {status[0].title}
                  </span>
                }
              </div>
            }
          />
        </div>
        <a className="title link">Запросы →</a>
      </div>
    );
  }
}
