import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kennel from './components/Kennel';

//this is where the function Kennel will be executed and everything inside that function rendered to DOM
ReactDOM.render(
  //Kennel is the component we are rendering (can consider Kennel like a factory function that returns an object)
  <React.StrictMode>
    <Kennel />
  </React.StrictMode>,
  //this is where we are rendering it
  document.getElementById('root')
);


