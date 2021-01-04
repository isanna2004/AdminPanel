import React, { useState } from "react";
import "./Employeers.scss";

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import data from "../data.json";

export default function Employeers(props) {
  let [employeers, setEmployeers] = useState(data);
  let [employ, Setemploy] = useState();

  /**делим массив на одинаковые части для слайда */
  const splitArrayIntoChunks = (arr, len) => {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  };
  const slides = splitArrayIntoChunks(employeers, 9);
  const status = [
    {
      title: "В отпуске",
      color: "rgb(45, 156, 219)",
      background: "rgba(45, 156, 219,0.1)",
      id: "vacation",
    },
    {
      title: "отгул",
      color: "rgb(242, 153, 74)",
      background: "rgba(242, 153, 74,0.1)",
      id: "onleave",
    },
    {
      title: "Больничный",
      color: "rgb(255, 15, 0",
      background: "rgba(255, 15, 0, 0.1)",
      id: "ill",
    },
  ];

  /**настройки слайдера */
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIos />,
    nextArrowDisabled: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
  };

  /**определяем активных сотрудников */
  const active = data.filter((elem) => elem.status === "активен");
/**функция склонения слова */
  const num_word = (value, words) => {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return value + " " + words[2];
    if (num > 1 && num < 5) return value + " " + words[1];
    if (num == 1) return value + " " + words[0];
    return value + " " + words[2];
  };
  return (
    <section className="employeers" id={props.id}>
      <h3 className="title">
        Отсутствующие сотрудники{" "}
        <span className="counter">{data.length - active.length}</span>
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
          style={{
            background: employ === "all" ? "rgba(39, 174, 96,0.1)" : "#eeee",
          }}
          onClick={() => {
            setEmployeers((employeers = data));
            Setemploy((employ = "all"));
          }}
        >
          <b
            className="count"
            style={{ borderLeftColor: "rgba(39, 174, 96,1)" }}
          >
            Все
          </b>
          <span>
            {num_word(data.length, ["сотрудник", "сотрудника", "сотрудников"])}
          </span>
        </p>
        {status.map((employeerStatus) => (
          <p
            key={employeerStatus.id}
            className="name-count"
            onClick={() => {
              Setemploy((employ = employeerStatus.id));
              setEmployeers(
                (employeers = data.filter(
                  (elem) => elem.status === employeerStatus.title.toLowerCase()
                ))
              );
            }}
            style={{
              background:
                employeerStatus.id === employ
                  ? employeerStatus.background
                  : "#eeee",
            }}
          >
            <b
              className="count"
              style={{
                borderLeftColor: employeerStatus.color,
              }}
            >
              {employeerStatus.title}
            </b>
            <span>
              {num_word(
                data.filter(
                  (elem) => elem.status === employeerStatus.title.toLowerCase()
                ).length,
                ["сотрудник", "сотрудника", "сотрудников"]
              )}{" "}
            </span>
          </p>
        ))}
      </div>

      <div className="employ">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div>
              <div className="employeer-list">
                {slide.map((employeer) => (
                  <div className="list-item" key={employeer.id}>
                    <img className="avatar" src="/images/ava.png" />
                    <h5 className="employee-name">{employeer.name}</h5>
                    <p className="employee-position">{employeer.position}</p>
                    <p
                      className="date"
                      style={{
                        background:
                          employeer.status === "больничный"
                            ? "rgba(255,15,0,0.1)"
                            : employeer.status === "отгул"
                            ? "rgba(242, 153, 74,0.1)"
                            : employeer.status === "в отпуске"
                            ? "rgba(45, 156, 219,0.1)"
                            : "rgba(39, 174, 96,0.1)",

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
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
