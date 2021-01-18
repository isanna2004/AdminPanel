import React from "react";
import "./Requests.scss";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default class Requests extends React.Component {
  render() {
    const status = [
      {
        title: " 2 несогласованных запроса",
        bgcolor: "#ff4c00",
        name: " Петров Алексей и  Шишкин Егор",
      },

      {
        title: " запрос на больничный",
        data: "20 августа, 09:00 - 21 августа 18:00",
        color: "rgba(39, 174, 96",
        status: "Согласован",
      },
    ];
    const settings = {
      dots: true,
      nextArrow: <ArrowForwardIos />,
      prevArrow: <ArrowBackIos />,
    };
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Запросы <span className="counter">{status.length}</span>
        </h4>{" "}
        <div className="content">
          <Slider {...settings}>
            {status.map((status) => (
              <div className="text" key={status.title}>
                <p>
                  {status.title.includes("запроса") ? "У вас " : "Ваш"}
                  <b className="counter" style={{background:status.bgcolor|| "none",color:status.bgcolor?"white":"black"}}>{status.title}</b>
                  <br />
                  {status.data || "от сотрудников"}  <b> {status.name|| ""}</b>
                  <br />
                  <span
                    className="counter"
                    style={{
                      background:status.status? `${status.color},0.2)`:"none",
                      color: status.color,
                    }}
                  >
                    {status.status || ""}
                  </span>
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
