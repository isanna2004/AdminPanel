import React from "react";
import "./WaterfallNews.scss";
import Icon from "react-eva-icons";
export default function WaterfallNews(props) {
  let date = new Date();

  const news = [
    {
      type: "message",
      title: "Company Sample Name",
      background: "rgba(242, 201, 76, 0.2)",
      text: "Текст объявления, который написан от лица компании.",
      avatar: "/images/frog.png",
      id: "company",
      date: date.getDate(),
    },
    {
      type: "message",
      title: "Employeer Name",
      background: "#F8F8F8",
      text: "Текст объявления, который написан от лица сотрудника.",
      avatar: "/images/avatar.png",
      id: "employeer",
      date: date.getDate() - 1,
    },
    {
      type: "news",
      title:
        "Здесь будет находится длинный очень длинный заголовок опубликованной новости в водопаде событий",
      descr:
        " Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых...",
      avatar: "/images/avatar.png",
      id: "employeer",
      date: date.getDate() - 1,
    },
  ];

  const elemComponents = {
    message: function ({data}) {
      return (
        <div
          key={data.id}
          className="company"
          style={{
            background: data.background,
            borderTop: data.id === "company" ? "1px solid red" : "",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <span
            className="tag"
            style={{
              top: data.id === "company" ? "-10%" : "90%",
              border:
                data.id === "company"
                  ? "1px solid #ff4c00"
                  : "1px solid #DDDDDD",
            }}
          >
            {date.getDate() - data.date === 1
              ? "вчера"
              : date.getDate() - data.date === 0
              ? "сегодня"
              : date.getDate() - data.date + "дней назад"}
          </span>
          <p className="content">
            {" "}
            <img src={data.avatar} alt="company" className="company-avatar" />
            <b> {data.title} </b> <span className="data">Сегодня, 10:55</span>
          </p>

          <p
            className="text"
            style={{ background: data.background, opacity: 1 }}
          >
            {data.text}
          </p>
        </div>
      );
    },
    news: function ({ data }) {
      return (
        <div>
          {" "}
          <div className="updates text">
            <img src="/images/updates.png" alt="updates" />
            <br />
            <span className="data">30 апреля 2020, 12:00</span>
            <h4 className="title">{data.title}</h4>
            <p className="data">{data.descr} </p>
          </div>
          <div className="button-group">
            <div>
              {" "}
              <button className="btn">
                <img src="/images/Emote.png" alt="" /> 3
              </button>
              <button className="btn">
                <img src="/images/Emote.png" alt="" /> 5
              </button>
              <button className="btn">
                {" "}
                <Icon
                  name="message-circle-outline"
                  size="medium"
                  fill="#616061"
                />
              </button>
            </div>
            <button className="btn comments">
              <Icon
                name="message-circle-outline"
                size="medium"
                fill="#616061"
              />
              18 комментариев
            </button>
          </div>
        </div>
      );
    },
    default: function () {
      return <div>Неизвестный тип записи</div>;
    },
  };
  return (
    <div className="requests waterfall" id={props.id}>
      <h4 className="title">
        Водопад Событий <span className="counter">{news.length}</span>
      </h4>
      <div className="news">
        {news.map((item) => {
          const ViewComponent =
            elemComponents[item.type] || elemComponents.default;
          return <ViewComponent data={item} />;
        })}
      </div>
    </div>
  );
}
