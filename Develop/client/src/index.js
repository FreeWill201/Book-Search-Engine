const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

module.exports = { typeDefs, resolvers };
