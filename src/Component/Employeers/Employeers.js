import React from "react";
import "./Employeers.css";
import Ava from "../../images/ava.png";
export default class Employeers extends React.Component {
  render() {
    return (
      <section className="employeers" id={this.props.id}>
        <div className="employeers-header">
          <h3 className="title">
            Headline title <span>Notifications_Count</span>
          </h3>
          <ul className="holders">
            <li>DayName, dd mmm</li>
            <li>DayName, dd mmm</li>
            <li>DayName, dd mmm</li>
          </ul>
        </div>
        <div className="employeers-name">
          <p className="name-count">
            <b>Name</b> <span className="count">Count</span>
          </p>
          <p className="name-count">
            <b>Name</b> <span className="count">Count</span>
          </p>
          <p className="name-count">
            <b>Name</b> <span className="count">Count</span>
          </p>
          <p className="name-count">
            <b>Name</b> <span className="count">Count</span>
          </p>
        </div>
        <div className="employeers-list">
          <div className="list-item">
           
              <img className="avatar" src={Ava} />
            
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
          <div className="list-item">
            <img className="avatar" src={Ava} />
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
          <div className="list-item">
            <img className="avatar" src={Ava} />
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
          <div className="list-item">
            <img className="avatar" src={Ava} />
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
          <div className="list-item">
            <img className="avatar" src={Ava} />
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
          <div className="list-item">
            <img className="avatar" src={Ava} />
            <h5>Name Surname</h5>
            <p>Employee-position</p>
            <data> Dd Month yyyy - Dd Month yyyy </data>
          </div>
        </div>
      </section>
    );
  }
}
