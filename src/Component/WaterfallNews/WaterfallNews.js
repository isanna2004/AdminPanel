import React from "react";
import "./WaterfallNews.css";
import Company from "../../images/company-avatar.png";
import Ava from "../../images/ava.png";
import updates from "../../images/updates.png";
export default class WaterfallNews extends React.Component {
  render() {
    return (
      <div className="requests waterfall" id={this.props.id}>
        <h4 className="title">
          Водопад Событий <span className="counter"> 1</span>
        </h4>
        <div className="news">
          <span className="tag">Новое</span>
          <div className="company">
            <p>
              {" "}
              <img src={Company} alt="company" className="company-avatar" />
              <b> Company Sample Name </b> <data>Сегодня, 10:55</data>
            </p>

            <p className="text">
              Текст объявления, который написан от лица компании.
            </p>
          </div>
          <p className="employeer">
            <img src={Ava} alt="employeer" className="company-avatar" />
            <b>Калинина Оксана</b> <data>Сегодня, 9:20</data>
            <p className="text">
              Текст объявления, который написан от лица сотрудника.
            </p>{" "}
            <span className="tag">Вчера</span>
          </p>{" "}
        </div>
        <div className="updates">
          <img src={updates} alt="updates" />
          <h6>
            {" "}
            Здесь будет находится длинный очень длинный заголовокопубликованной
            новости в водопаде событий
          </h6>
          <p className="text">
            Разнообразный и богатый опыт постоянный количественный рост и сфера
            нашей активности позволяет оценить значение позиций, занимаемых...{" "}
          </p>
        </div>
        <div className="button-group">
          <div>
            {" "}
            <button className="btn">3</button>
            <button className="btn">5</button>
            <button className="btn">☺</button>
          </div>
          <button className="btn">18 комментариев</button>
        </div>
      </div>
    );
  }
}
