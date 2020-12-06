import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Notificate from "../Notificate/Notificate";
import Employeers from "../Employeers/Employeers";
import Base from "../Base/Base";
import Requests from "../Requests/Requests";
import Calendar from "../Calendar/Calendar";
import WaterfallNews from "../WaterfallNews/WaterfallNews";
function App() {
  return (
    <div className="App">
      <header className="App-header my-3">
        <Header />
      </header>
      <div className="Grid">
        <Navigation id="nav" />
        <Employeers id="employeers" />
        <Requests id="requests" />
        <Calendar id="calendar" />
        <Base id="base" />
        <WaterfallNews id="waterfall-news"/>
        <Notificate />
      </div>
    </div>
  );
}

export default App;
