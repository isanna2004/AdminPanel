import React, { useState } from "react";
import Icon from "react-eva-icons";
import "./Navigation.scss";
import { KeyboardArrowDown,KeyboardArrowUp } from "@material-ui/icons";

export default function Navigation() {
  let [Shown, setShown] = useState(false);
  const item = [
    { title: "Главная", link: "flash-outline" },
    { title: "Запросы", link: "flash-outline" },
    { title: "Календарь", link: "calendar-outline" },
    { title: "База знаний", link: "book-outline" },
    { title: "Новости", link: "book-open-outline" },
    { title: "Задачи", link: "checkmark-circle-outline" },
    { title: "Чаты", link: "message-circle-outline" },
  ];
  return (
    <div>
      <h3
        className="title"
        onClick={() => {
          setShown((Shown = !Shown));
        }}
      >
        Компания
        {Shown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </h3>

      <ul style={{ display: Shown ? "block" : "none" }}>
        {item.map((title) => (
          <li>
            <Icon name={title.link} size="large"  fill= "#616061" />
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
