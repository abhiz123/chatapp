import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDhcL65NnZOlCzt5fR5VqNUX9Srl2Wpad0",
  authDomain: "chatapp-c72b5.firebaseapp.com",
  databaseURL: "https://chatapp-c72b5.firebaseio.com",
  projectId: "chatapp-c72b5",
  storageBucket: "chatapp-c72b5.appspot.com",
  messagingSenderId: "500887238408",
  appId: "1:500887238408:web:090b7fe0732b377c78debd",
  measurementId: "G-91SHJECPWK",
});

const routing = (
  <Router>
    <div id="routing container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
