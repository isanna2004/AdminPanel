import React from "react";
import "./WaterfallNews.scss";
import Icon from "react-eva-icons";
export default function WaterfallNews(props) {
  let date = new Date();

  const news = [
    {
      title: "Company Sample Name",
      background: "rgba(242, 201, 76, 0.2)",
      text: "Текст объявления, который написан от лица компании.",
      avatar: "/images/frog.png",
      id: "company",
      date: date.getDate(),
    },
    {
      title: "Employeer Name",
      background: "#F8F8F8",
      text: "Текст объявления, который написан от лица сотрудника.",
      avatar: "/images/avatar.png",
      id: "employeer",
      date: date.getDate() - 1,
    },
  ];
  return (
    <div className="requests waterfall" id={props.id}>
      <h4 className="title">
        Водопад Событий <span className="counter">{news.length}</span>
      </h4>
      <div className="news">
        {news.map((person) => (
          <div key={person.id}
            className="company"
            style={{
              background: person.background,
              borderTop: person.id === "company" ? "1px solid red" : "",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <span
              className="tag"
              style={{
                top: person.id === "company" ? "-10%" : "90%",
                border:
                  person.id === "company"
                    ? "1px solid #ff4c00"
                    : "1px solid #DDDDDD",
              }}
            >
              {date.getDate() - person.date == 1
                ? "вчера"
                : date.getDate() - person.date == 0
                ? "сегодня"
                : date.getDate() - person.date + "дней назад"}
            </span>
            <p className="content">
              {" "}
              <img
                src={person.avatar}
                alt="company"
                className="company-avatar"
              />
              <b> {person.title} </b> <span className="data">Сегодня, 10:55</span>
            </p>

            <p
              className="text"
              style={{ background: person.background, opacity: 1 }}
            >
              {person.text}
            </p>
          </div>
        ))}
      </div>
      <div className="updates text">
        <img src="/images/updates.png" alt="updates" /><br />
 <span className="data">30 апреля 2020, 12:00</span>
        <h4 className="title">
         
           {/* {this.props.title} */}
          Здесь будет находится длинный очень длинный заголовок опубликованной
          новости в водопаде событий
        </h4>
        <p className="data">
          {/* {this.props.text} */}
          Разнообразный и богатый опыт постоянный количественный рост и сфера
          нашей активности позволяет оценить значение позиций, занимаемых...{" "}
        </p>
      </div>
      <div className="button-group">
        <div>
          {" "}
          <button className="btn">
            <img src="/images/Emote.png" /> 3
          </button>
          <button className="btn">
            <img src="/images/Emote.png" /> 5
          </button>
          <button className="btn">
            {" "}
            <Icon name="message-circle-outline" size="medium" fill="#616061" />
          </button>
        </div>
        <button className="btn comments">
          <Icon name="message-circle-outline" size="medium" fill="#616061" />
          18 комментариев
        </button>
      </div>
    </div>
  );
}
