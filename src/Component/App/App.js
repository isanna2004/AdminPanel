import React, { useState } from "react";
import "./App.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Notificate from "../Notificate/Notificate";
import Employeers from "../Employeers/Employeers";
import Base from "../Base/Base";
import Requests from "../Requests/Requests";
import Calendar from "../Calendar/Calendar";
import WaterfallNews from "../WaterfallNews/WaterfallNews";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <nav>
          <Navigation
            title={"компания"}
            item={[
              { title: "Главная", link: "copy-outline" },
              { title: "Запросы", link: "flash-outline" },
              { title: "Календарь", link: "calendar-outline" },
              { title: "База знаний", link: "book-outline" },
              { title: "Новости", link: "book-open-outline" },
              { title: "Задачи", link: "checkmark-circle-outline" },
              { title: "Чаты", link: "message-circle-outline" },
            ]}
          />
          <Navigation
            title={"администратор"}
            item={[
              { title: "Статистика компании", link: "trending-up" },
              { title: "Структура компании", link: "copy-outline" },
              { title: "Сотрудники", link: "people-outline" },
              { title: "База знаний", link: "book-outline" },
              { title: "Новости", link: "book-open-outline" },
              { title: "Настройки", link: "settings-outline" },
              { title: "Служба поддержки", link: "layers-outline" },
            ]}
          />
        </nav>
        <div className="Grid">
          <Employeers id="employeers" />
          <Requests id="requests" />
          <Calendar id="calendar" />
          <Base id="base" />
          <WaterfallNews id="waterfall-news" />
          <Notificate id="notificate" />
        </div>
      </main>
    </div>
  );
}

export default App;
