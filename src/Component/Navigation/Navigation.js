import React, { useState } from "react";
import Icon from "react-eva-icons";

import "./Navigation.scss";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

export default function Navigation() {
  let [Shown, setShown] = useState(false);
  const item = [
    { title: "Главная", link: "copy-outline" },
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
          setShown(!Shown);
        }}
      >
        Компания
        {Shown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      </h3>

      <ul style={{ display: Shown ? "block" : "none" }}>
        {item.map((title) => (
          <li key={title.title}>
            <Icon name={title.link} size="large" fill="#616061" />
            {title.title}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mask"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.375 6.125C5.375 4.6775 6.5525 3.5 8 3.5C9.4475 3.5 10.625 4.6775 10.625 6.125C10.625 7.31 9.83 8.30225 8.75 8.62775V9.5C8.75 9.91475 8.41475 10.25 8 10.25C7.58525 10.25 7.25 9.91475 7.25 9.5V8C7.25 7.58525 7.58525 7.25 8 7.25C8.62025 7.25 9.125 6.74525 9.125 6.125C9.125 5.50475 8.62025 5 8 5C7.37975 5 6.875 5.50475 6.875 6.125C6.875 6.53975 6.53975 6.875 6.125 6.875C5.71025 6.875 5.375 6.53975 5.375 6.125ZM7.25 11.75C7.25 11.3352 7.58525 11 8 11C8.41475 11 8.75 11.3352 8.75 11.75C8.75 12.1648 8.41475 12.5 8 12.5C7.58525 12.5 7.25 12.1648 7.25 11.75ZM8 14C4.69175 14 2 11.3082 2 8C2 4.69175 4.69175 2 8 2C11.3082 2 14 4.69175 14 8C14 11.3082 11.3082 14 8 14ZM8 0.5C3.8645 0.5 0.5 3.8645 0.5 8C0.5 12.1355 3.8645 15.5 8 15.5C12.1355 15.5 15.5 12.1355 15.5 8C15.5 3.8645 12.1355 0.5 8 0.5Z"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
