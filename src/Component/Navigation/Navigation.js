import React from "react";
import "./Navigation.css";
import fanki from "../../images/Fanki.png";
import {
  KeyboardArrowDown,
  CalendarTodayOutlined,
  FlashOnOutlined,
  TextsmsOutlined,
  ImportContactsOutlined,
  CheckCircleOutlineOutlined,
  TrendingUpRounded,
  FilterNoneOutlined,
   PeopleOutline,
CallToActionOutlined,
SettingsOutlined,
LayersOutlined
} from "@material-ui/icons";
export default class Navigation extends React.Component {
  render() {
    return (
      <nav id={this.props.id}>
        <h3 className="title" onClick={() => {
              document.getElementById("list-group").classList.toggle("active");
            }}>
          Company Name{" "}
          <KeyboardArrowDown
            style={{ marginRight: "10px" }}
           
          />
        </h3>
        <ul id="list-group">
          <li>
            <img src={fanki} style={{ marginRight: "10px" }} alt="" />
            Главная
          </li>
          <li>
            <FlashOnOutlined />
            Запросы
          </li>
          <li>
            <CalendarTodayOutlined style={{ marginRight: "10px" }} />
            Календарь
          </li>
          <li>
            <CallToActionOutlined style={{ marginRight: "10px" }} /> База знаний
          </li>
          <li>
            <ImportContactsOutlined style={{ marginRight: "10px" }} /> Новости
          </li>
          <li>
            <CheckCircleOutlineOutlined style={{ marginRight: "10px" }} />{" "}
            Задачи
          </li>
          <li>
            <TextsmsOutlined style={{ marginRight: "10px" }} /> Чаты
          </li>
        </ul>

        <h3 className="title" onClick={() => {
              document.getElementById("list-group2").classList.toggle("active");
            }}>
          Администратор{" "}
          <KeyboardArrowDown
           
          />
        </h3>
        <ul id="list-group2">
          <li>
            <TrendingUpRounded style={{ marginRight: "10px" }} /> Статистика
            компании
          </li>
          <li>
            <FilterNoneOutlined style={{ marginRight: "10px" }} />
            Структура компании
          </li>
          <li>
            <PeopleOutline style={{ marginRight: "10px" }} />
            Сотрудники
          </li>
          <li>
            <CallToActionOutlined style={{ marginRight: "10px" }} />
            База знаний
          </li>
          <li>
            <ImportContactsOutlined style={{ marginRight: "10px" }} />
            Новости
          </li>
          <li>
            <SettingsOutlined style={{ marginRight: "10px" }} />
            Настройки
          </li>
          <li><LayersOutlined/> Служба поддержки</li>
        </ul>
      </nav>
    );
  }
}
