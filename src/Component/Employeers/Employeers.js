import React, { useState, useEffect } from "react";
import "./Employeers.scss";

import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import data from "../data.json";

const defaultStatus = {
  title: "Активен",
  color: "rgb(45, 156, 219)",
  background: "rgba(45, 156, 219,0.1)",
  id: "",
}

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

const getStatus = (id) => {
  return status.find((s) => s.id === id) || defaultStatus
}

export default function Employeers(props) {
  let [employeers, setEmployeers] = useState(data.map((empl) => ({...empl, status: getStatus(empl.status_id)})));
  let [statusFilter, SetstatusFilter] = useState();
console.log(employeers)

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

  const filteredEmpl = employeers.filter((elem) => !statusFilter || elem.status_id === statusFilter);

  const slides = splitArrayIntoChunks(filteredEmpl, 9);

  /**настройки слайдера */
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIos />,
    nextArrowDisabled: <ArrowForwardIos />,
    prevArrow: <ArrowBackIos />,
  };

  /**определяем активных сотрудников */
  const active = data.filter((elem) => elem.status_id === "");
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
            background:
              statusFilter === "" ? "#cbffe1" : "#eee",
          }}
          onClick={() => {
            SetstatusFilter('');
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
              SetstatusFilter(employeerStatus.id);
            }}
            style={{
              background:
                employeerStatus.id === statusFilter
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
          {slides.map((slide) => {
            return (
              <div>
                <div className="employeer-list">
                  {slide.map((employeer) => (
                    <div className="list-item" key={employeer.id}>
                      <img className="avatar" src="/images/ava.png" />
                      <h5 className="employee-name">{employeer.name}</h5>
                      <p className="employee-position">{employeer.position}</p>
                      {console.log(employeer.status)}
                      <p
                        className="date"
                        style={{
                          backgroundColor: employeer.status.background,
                        }}
                      >
                        {employeer.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
