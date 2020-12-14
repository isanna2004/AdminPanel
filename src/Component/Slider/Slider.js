import React from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
export default class Sliders extends React.Component {
 
    render() {
    const settings = {
        dots:true,
      nextArrow: <ArrowForwardIos />,
      prevArrow: <ArrowBackIos />,
      
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.slideFirst}
          {this.props.slideSecond}
        </Slider>
      </div>
    );
  }
}
