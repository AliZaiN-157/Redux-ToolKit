import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import ReduxStore from "./store";
import "bootswatch/dist/lumen/bootstrap.min.css"; // Added this :boom:

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
