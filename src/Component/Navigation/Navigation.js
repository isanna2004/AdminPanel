import React from "react";
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Navigation.css";
import fanki from "../../images/Fanki.png";
import App from "../App/App";
import Requests from "../Requests/Requests";
import Calendar from "../Calendar/Calendar";
import WaterfallNews from "../WaterfallNews/WaterfallNews";
import Notificate from "../Notificate/Notificate";
import Base from "../Base/Base";
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
  LayersOutlined,
} from "@material-ui/icons";

export default class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <nav id={this.props.id}>
          <h3
            className="title"
            onClick={() => {
              document.getElementById("list-group").classList.toggle("active");
            }}
          >
            Company Name <KeyboardArrowDown style={{ marginRight: "10px" }} />
          </h3>

          <ul id="list-group">
            {" "}
            <NavLink exact to="/App">
              <li>
                <img src={fanki} style={{ marginRight: "10px" }} alt="" />
                Главная
              </li>
            </NavLink>
            <NavLink exact to="/Requests">
              <li>
                <FlashOnOutlined />
                Запросы
              </li>
            </NavLink>
            <NavLink exact to="/Calendar">
              <li>
                <CalendarTodayOutlined style={{ marginRight: "10px" }} />
                Календарь
              </li>{" "}
            </NavLink>
            <NavLink exact to="/Base">
              <li>
                <CallToActionOutlined style={{ marginRight: "10px" }} /> База
                знаний
              </li>{" "}
            </NavLink>
            <NavLink exact to="/WaterfallNews">
              <li>
                <ImportContactsOutlined style={{ marginRight: "10px" }} />{" "}
                Новости
              </li>
            </NavLink>
            <NavLink exact to="/Requests">
              {" "}
              <li>
                <CheckCircleOutlineOutlined style={{ marginRight: "10px" }} />{" "}
                Задачи
              </li>
            </NavLink>
            <NavLink exact to="/Notificate">
              <li>
                <TextsmsOutlined style={{ marginRight: "10px" }} /> Чаты
              </li>
            </NavLink>
          </ul>
       <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/Requests">
              <Requests />
            </Route>
            <Route path="/Base">
              <Base />
            </Route>
            <Route path="/Calendar">
              <Calendar />
            </Route>
            <Route path="/WaterfallNews">
              <WaterfallNews />
            </Route>
            <Route path="/Notificate">
              <Notificate />
            </Route>
          </Switch> 
          <h3
            className="title"
            onClick={() => {
              document.getElementById("list-group2").classList.toggle("active");
            }}
          >
            Администратор <KeyboardArrowDown />
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
            <li>
              <LayersOutlined /> Служба поддержки
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}
