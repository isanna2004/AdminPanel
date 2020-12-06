import React from "react";
import "./Base.css";
import Book from "../../images/books.png";
export default class Base extends React.Component {
    render(){
        return (
          <div className="requests" id={this.props.id}>
            <h4 className="title">
              База знаний <span className="counter"> 1</span>
            </h4>
            <div className="content">
              <span className="arrows"> &lt; </span>{" "}
              
              <p className="text"><img src={Book} alt="books" /><br/>
                Новых публикаций нет
                
              </p>{" "}
              <span className="arrows">&gt;</span>
            </div>
            <div className="dots">
              <span>• •</span>
              <h4 className="title">База знаний →</h4>
            </div>
          </div>
        );
    }
}