import React, { useState } from "react";
import Icon from "react-eva-icons";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
export default function Admin() {
  let [Shown, setShown] = useState(false);

  const admin = [
    { title: "Статистика компании", link: "trending-up" },
    { title: "Структура компании", link: "copy-outline" },
    { title: "Сотрудники", link: "people-outline" },
    { title: "База знаний", link: "book-outline" },
    { title: "Новости", link: "book-open-outline" },
    { title: "Настройки", link: "settings-outline" },
    { title: "Служба поддержки", link: "layers-outline" },
  ];
  return (
    <div>
      <h3
        className="title"
        onClick={() => {
          setShown((Shown = !Shown));
        }}
      >
        Администратор
        {Shown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </h3>
      <ul style={{ display: Shown ? "block" : "none" }}>
        {admin.map((title) => (
          <li>
            {" "}
            <Icon name={title.link} size="large" fill=" #616061" />
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
