import React from "react";
import "./Base.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick";
export default class Base extends React.Component {
  render() {
    const Base = [
      {
        title: "",
        image: "/images/books.png",
      },
    ];
    const settings = {
      dots: true,
      nextArrow: <ArrowForwardIos />,
      prevArrow: <ArrowBackIos />,
    };
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          База знаний <span className="counter"> {Base.length}</span>
        </h4>
        <div className="content">
          <Slider {...settings}>
            {Base.map((item) => (
              <div className="text" key={item.title}>
                <p>
                  <img src={item.image} alt="books" />
                  <br />
                  {item.title || " Новых публикаций нет"}{" "}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        <a className="title link">База знаний →</a>
      </div>
    );
  }
}
