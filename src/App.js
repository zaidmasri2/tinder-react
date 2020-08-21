import React from "react";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header backButton="/chats" />
            {/*Tinder Cards*/}
            <TinderCards />
            {/*Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>

        {/*Chats screen*/}
        {/*Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
