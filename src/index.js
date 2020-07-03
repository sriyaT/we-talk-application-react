import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard';
import Home from './Home/Home';


const firebase =  require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCld9emOosmQ-VlTOl6VrYQ2RSHqBYAXWQ",
    authDomain: "react-chat-app-ba8e7.firebaseapp.com",
    databaseURL: "https://react-chat-app-ba8e7.firebaseio.com",
    projectId: "react-chat-app-ba8e7",
    storageBucket: "react-chat-app-ba8e7.appspot.com",
    messagingSenderId: "370799086638",
    appId: "1:370799086638:web:009d6829bf769e8a81a3bf",
    measurementId: "G-X7FE3DXMD3"
});

const Routing = (
      <div id="routing-container">
  <Router>
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    
  </Router>
      </div>
)
ReactDOM.render(Routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

