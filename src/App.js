import React, {Component, useState, useLayoutEffect } from 'react';
import logo from './images/TacoBell2.png';

import './reserve_page.css';
import './homepage.css';


import Home from './components/home';


import { BrowserRouter,Routes,Route,Link,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




class App extends Component  {

  
  
  render(){
   
  return (

    <Routes >
      <Route exact path='/' element=
      { 
        <div className="reserve_bg"> 
   
          <img src={logo} className='logo'  alt="logo" />
          <p class="opening-date">Opening will be on 31th May</p>
          <button class="btn   reserve_seat" type="submit">Book Your seat </button>
        </div> 
      }/>
      <Route exact path='/home' element=
      { 
        <div className=""> 
          <Home/>
        </div> 
      }/>
   
 
   
 
    </Routes>
    

    
    
  );
}
}
export default App;