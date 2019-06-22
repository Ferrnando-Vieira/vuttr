import React, { Component } from "react";
import { Provider } from "react-redux";

import "./config/reactotron";
import Main from "./pages";

import store from "./store";

import "./styles/global.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 3000,
  position: "top-center"
});
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
