import React from "react";
import "./Base.scss";

import Slider from "../Slider/Slider";
export default class Base extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          База знаний <span className="counter"> 1</span>
        </h4>
        <div className="content">
          <Slider
            slideFirst={
              <div className="text">
                <p>
                  <img
                    src="/images/books.png"
                    alt="books"
                    style={{ margin: "0 auto" }}
                  />
                  <br />
                  Новых публикаций нет
                </p>
              </div>
            }
            slideSecond={
              <div className="text">
                <p>
                  <img
                    src="/images/books.png"
                    alt="books"
                    style={{ margin: "0 auto" }}
                  />
                  <br />
                  Новых публикаций нет
                </p>
              </div>
            }
          />
        </div>

        <h4 className="title">База знаний →</h4>
      </div>
    );
  }
}
