import React from "react";
import "./Employeers.css";
import Ava from "../../images/ava.png";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import data from "../Data/data.json";

export default class Employeers extends React.Component {
  state = {
    employeers: data,
  };

  render() {
    const { employeers } = this.state;
    const firstSlide =
      employeers.length >= 9
        ? employeers.slice(0, Math.floor(employeers.length / 2))
        : employeers;
    const secondSlide =
      employeers.length >= 9
        ? employeers.slice(Math.floor(employeers.length / 2))
        : [];
    const active = employeers.filter((elem) => elem.status === "активен");
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ArrowForwardIos />,
      nextArrowDisabled: <ArrowForwardIos />,
      prevArrow: <ArrowBackIos />,
    };
    return (
      <section className="employeers" id={this.props.id}>
        <h3 className="title">
          Отсутствующие сотрудники{" "}
          <span>{employeers.length - active.length}</span>
        </h3>
        <div className="employeers-header">
          <ul className="holders">
            <li>Сегодня, 20 авг</li>
            <li>Завтра, 21 авг</li>
            <li>Неделя</li>
          </ul>
        </div>
        <div className="employeers-name">
          <p
            className="name-count"
            onClick={() =>
              this.setState({
                employeers: data,
              })
            }
          >
            <b className="count">Все</b> <span>{data.length} сотрудников</span>
          </p>

          <p
            className="name-count"
            onClick={() =>
              this.setState({
                employeers: data.filter((elem) => elem.status === "в отпуске"),
              })
            }
          >
            <b className="count" style={{ borderLeftColor: " #2F80ED" }}>
              В отпуске
            </b>
            <span>
              {data.filter((elem) => elem.status === "в отпуске").length}
              сотрудников
            </span>
          </p>
          <p
            className="name-count"
            onClick={() => {
              this.setState({
                employeers: data.filter((elem) => elem.status === "отгул"),
              });
            }}
          >
            <b className="count" style={{ borderLeftColor: "#F2994A" }}>
              Отгул
            </b>{" "}
            <span>
              {data.filter((elem) => elem.status === "отгул").length}{" "}
              сотрудников
            </span>
          </p>
          <p
            className="name-count"
            onClick={() =>
              this.setState({
                employeers: data.filter((elem) => elem.status === "больничный"),
              })
            }
          >
            <b className="count" style={{ borderLeftColor: "#FF0F00" }}>
              Больничный
            </b>{" "}
            <span>
              {data.filter((elem) => elem.status === "больничный").length}{" "}
              сотрудника
            </span>
          </p>
        </div>{" "}
        <div className="employ">
          <Slider {...settings}>
            <div>
              <div className="employeer-list">
                {firstSlide.map((employeer) => {
                  return (
                    <div className="list-item" key={employeer.id}>
                      <img className="avatar" src={Ava} />
                      <h5 className="employee-name">{employeer.name}</h5>
                      <p className="employee-position">{employeer.position}</p>
                      <p
                        className="date"
                        style={{
                          backgroundColor:
                            employeer.status === "больничный"
                              ? "rgba(255,15,0,0.1)"
                              : employeer.status === "отгул"
                              ? "rgba(242, 153, 74, 0.1)"
                              : employeer.status === "в отпуске"
                              ? "rgba(45, 156, 219, 0.1)"
                              : "rgba(39, 174, 96, 0.1)",
                          color:
                            employeer.status === "больничный"
                              ? "rgba(255,15,0,1)"
                              : employeer.status === "отгул"
                              ? "rgba(242, 153, 74, 1)"
                              : employeer.status === "в отпуске"
                              ? "rgba(45, 156, 219,1)"
                              : "rgba(39, 174, 96,1)",
                        }}
                      >
                        {employeer.date}
                      </p>
                    </div>
                  );
                })}{" "}
              </div>
            </div>
            <div>
              <div className="employeer-list">
                {secondSlide.map((employeer) => {
                  return (
                    <div className="list-item" key={employeer.name}>
                      <img className="avatar" src={Ava} />
                      <h5 className="employee-name">{employeer.name}</h5>
                      <p className="employee-position">{employeer.position}</p>
                      <p
                        className="date"
                        style={{
                          backgroundColor:
                            employeer.status === "больничный"
                              ? "rgba(255,15,0,0.1)"
                              : employeer.status === "отгул"
                              ? "rgba(242, 153, 74, 0.1)"
                              : employeer.status === "в отпуске"
                              ? "rgba(45, 156, 219, 0.1)"
                              : "rgba(39, 174, 96, 0.1)",
                          color:
                            employeer.status === "больничный"
                              ? "rgba(255,15,0,1)"
                              : employeer.status === "отгул"
                              ? "rgba(242, 153, 74, 1)"
                              : employeer.status === "в отпуске"
                              ? "rgba(45, 156, 219,1)"
                              : "rgba(39, 174, 96,1)",
                        }}
                      >
                        {employeer.date}
                      </p>
                    </div>
                  );
                })}{" "}
              </div>
            </div>
          </Slider>{" "}
        </div>
      </section>
    );
  }
}
