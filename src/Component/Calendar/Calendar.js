import React from "react";
import "./Calendar.scss";
import Slider from "../Slider/Slider";

export default class Calendar extends React.Component {
  state = {
    date: "",
    eventCount: 3,
    time: "10:00 - 11:00",
    event: "Презентация мобильной системы",
  };
  render() {
    var month = [
      "Янв",
      "Фев",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сент",
      "Окт",
      "Нояб",
      "Дек",
    ];
    const date = new Date();
    const { event, time, eventCount } = this.state;
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Ближайшие события <span className="counter"> {eventCount}</span>
        </h4>{" "}
        <div className="content">
          <Slider
            slideFirst={
              <div className="text">
                <div className="calendar-date">
                  <span className="month">
                    {month[date.getMonth()]} <br />
                  </span>
                  {date.getDate()}
                </div>
                <p>Cегодня</p>
                <p>
                  {" "}
                  День рождения у сотрудников: <b>Александров Александр</b>{" "}
                  <br /> и <b> Фёдоров Георгий</b>
                </p>
              </div>
            }
            slideSecond={
              <div className="text">
                <div className="calendar-date">
                  <span className="month">
                    {month[date.getMonth()]} <br />
                  </span>
                  {date.getDate() + 1}
                </div>
                <p>Завтра</p>
                <p>
                  {time} | Групповое событие <br />
                  <b> {event}</b>
                </p>
              </div>
            }
          />
        </div>
        <a className="title link">Запросы →</a>
      </div>
    );
  }
}
