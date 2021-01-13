import React, { useState } from "react";
import "./App.scss";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Admin from "../Admin/Admin";
import Notificate from "../Notificate/Notificate";
import Employeers from "../Employeers/Employeers";
import Base from "../Base/Base";
import Requests from "../Requests/Requests";
import Calendar from "../Calendar/Calendar";
import WaterfallNews from "../WaterfallNews/WaterfallNews";
function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Navigation />
        <Admin />
      </nav>
      <div className="Grid">
        <Employeers id="employeers" />
        <Requests id="requests" />
        <Calendar id="calendar" />
        <Base id="base" />
        <WaterfallNews id="waterfall-news" />
        <Notificate id="notificate" />
      </div>
    </div>
  );
}

export default App;
