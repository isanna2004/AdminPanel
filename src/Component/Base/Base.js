import React from "react";
import "./Base.scss";
import { slick_settings } from "../../utils/slider_settings";
import Slider from "react-slick";
export default class Base extends React.Component {
  render() {
    // const Base = [
    //   {
    //     title: "",
    //     image: "/images/books.png",
    //   },
    // ];

    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          База знаний <span className="counter"> {Base.length}</span>
        </h4>
        <div className="content">
          <Slider {...slick_settings}>
            {Base.length ? (
              Base.map((item) => (
                <div className="text" key={item.title}>
                  <p>
                    <img src={item.image} alt="books" />
                    <br />
                    {item.title}
                  </p>
                </div>
              ))
            ) : (
              <div className="text">
                <p>
                  <img src="/images/books.png" alt="books" />
                  <br />
                  {" Новых публикаций нет"}
                </p>
              </div>
            )}
          </Slider>
        </div>
        <a className="title link">База знаний →</a>
      </div>
    );
  }
}
