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
    const firstSlide = employeers.slice(0, Math.floor(employeers.length / 2));
    const secondSlide = employeers.slice(Math.floor(employeers.length / 2));
    const absent = employeers.filter((elem) => elem.status === "активен");
 const settings = {  
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <ArrowForwardIos />,
    nextArrowDisabled:<ArrowForwardIos />,
   prevArrow: <ArrowBackIos />,
 };
    return (
      <section className="employeers" id={this.props.id}>
        <h3 className="title">
          Отсутствующие сотрудники{" "}
          <span>{employeers.length - absent.length}</span>
        </h3>
        <div className="employeers-header">
          <ul className="holders">
            <li>Сегодня, 20 авг</li>
            <li>Завтра, 21 авг</li>
            <li>Неделя</li>
          </ul>
        </div>
        <div className="employeers-name">
          <p className="name-count">
            <b className="count">Все</b>{" "}
            <span>{employeers.length} сотрудников</span>
          </p>
          <p className="name-count">
            <b className="count" style={{ borderLeftColor: " #2F80ED" }}>
              В отпуске
            </b>
            <span>
              {employeers.filter((elem) => elem.status === "в отпуске").length}
              сотрудников
            </span>
          </p>
          <p className="name-count">
            <b className="count" style={{ borderLeftColor: "#F2994A" }}>
              Отгул
            </b>{" "}
            <span>
              {employeers.filter((elem) => elem.status === "отгул").length}{" "}
              сотрудников
            </span>
          </p>
          <p className="name-count">
            <b className="count" style={{ borderLeftColor: "#FF0F00" }}>
              Больничный
            </b>{" "}
            <span>
              {employeers.filter((elem) => elem.status === "больничный").length}{" "}
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
                    <div className="list-item" key={employeer.name}>
                      <img className="avatar" src={Ava} />
                      <h5 className="employee-name">{employeer.name}</h5>
                      <p className="employee-position">{employeer.position}</p>
                      <p className="date">{employeer.date}</p>
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
                      <p className="date">{employeer.date}</p>
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
