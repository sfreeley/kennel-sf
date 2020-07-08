import React from 'react';
import ReactDOM from 'react-dom';
//specifying that this is a browser router and not native (ie for phone) and changing name to Router
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Kennel from './components/Kennel';

//this is where the function Kennel will be executed and everything inside that function rendered to DOM
ReactDOM.render(
  //Kennel is the component we are rendering (can consider Kennel like a factory function that returns an object)
  //Router has Kennel child component -- states will be placing Routes in my Kennel component
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>,
  </React.StrictMode>,
  //this is where we are rendering it
  document.getElementById('root')
);


