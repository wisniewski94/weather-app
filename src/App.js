import WebfontLoader from "@dr-kobros/react-webfont-loader";
import React, { Component } from "react";
import Header from "./components/header";
import Weather from "./components/weather";
import "./styles/App.sass";
import { Redirect, Route, Switch } from "react-router-dom";
import keyUI from "keyboard-ui";
import NotFound from "./components/notFound";
class App extends Component {
  state = {
    fontConfig: {
      google: {
        families: [
          "Playfair Display: 900",
          "Playfair Display: 500",
          "Noto Sans KR"
        ]
      }
    }
  };
  render() {
    return (
      <WebfontLoader config={this.state.fontConfig}>
        <div id="content">
          <Header />
          <Switch>
            <Route path="/home" component={Weather} />
            <Redirect from="/" exact to="/home" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </WebfontLoader>
    );
  }
}

export default App;
