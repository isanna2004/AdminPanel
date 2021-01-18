import React from "react";
import "./Calendar.scss";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default class Calendar extends React.Component {
  render() {
    const settings = {
      dots: true,
      nextArrow: <ArrowForwardIos />,
      prevArrow: <ArrowBackIos />,
    };
    let date = new Date();
    let name = ["Александров Александр", "Фёдоров Георгий"]; /** props.name*/
    const Events = [
      {
        date: date.getDate(),
        time: "10:00 - 11:00",
        event: "Презентация мобильной системы",
      },
      {
        date: date.getDate() + 1,
        time: "10:00 - 11:00",
        event: " День рождения у сотрудников:",
        name: name.join(" и "),
      },
    ];
    const Month = [
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

    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Ближайшие события <span className="counter"> {Events.length}</span>
        </h4>{" "}
        <div className="content">
          <Slider {...settings}>
            {Events.map((event) => (
              <div className="text" key={event.event}>
                <div className="calendar-date">
                  <span className="month">
                    {Month[date.getMonth()]} <br />
                  </span>
                  {event.date}
                </div>
                <p className="data">
                  {event.date === date.getDate() ? "Cегодня" : "Завтра"}
                </p>
                <p>
                  {event.event} <br />
                  <b>{event.name || ""}</b>{" "}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <a className="title link">Запросы →</a>
      </div>
    );
  }
}
