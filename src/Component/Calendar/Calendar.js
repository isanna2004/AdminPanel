import React from "react";
import "./Calendar.css";
import Slider from "../Slider/Slider";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
export default class Calendar extends React.Component {
  render() {
    return (
      <div className="requests" id={this.props.id}>
        <h4 className="title">
          Ближайшие события <span className="counter"> 1</span>
        </h4>
        <div className="content">
          <Slider
            slideFirst={
              <div className="text">
                {" "}
                <p>
                  10:00 - 11:00 | Групповое событие
                  <p>
                    Презентация мобильной системы
                  </p>
                </p>
              </div>
            }
            slideSecond={
              <div className="text">
                <p>
                  День рождения у сотрудников: <b>Александров Александр</b> и <b>Фёдоров
                  Георгий</b>
                  <br />
                
                </p>
              </div>
            }
          />
        </div>

        <h4 className="title">Календарь →</h4>
      </div>
    );
  }
}
