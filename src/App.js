import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './routes';
import './App.js';
import './components/GitCard';
import './App.css';

export default class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    )
  }
}