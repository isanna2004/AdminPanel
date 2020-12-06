import React from "react";
import "./Navigation.css";
import Company from "../../"
export default class Navigation extends React.Component {
  render() {
    return (
      <nav id={this.props.id}>
        <h3>
          Company Name <span>˅</span>
        </h3>
        <ul>
          <li>Главная</li>
          <li>Запросы</li>
          <li>Календарь</li>
          <li>Новости</li>
          <li>Задачи</li>
          <li>Чаты</li>
        </ul>

        <h3>
          Администратор <span>˅</span>
        </h3>
        <ul>
          <li>Статистика компании</li>
          <li>Структура компании</li>
          <li>Сотрудники</li>
          <li>База знаний</li>
          <li>Новости</li>
          <li>Настройки</li>
          <li>Служба поддержки</li>
        </ul>
      </nav>
    );
  }
}
