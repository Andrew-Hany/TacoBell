import React, {Component, useState, useLayoutEffect } from 'react';
import logo from './images/TacoBell2.png';

import './reserve_page.css';
import './homepage.css';
import './Cart.css';


import Home from './components/home';
import Cart from './components/MyCart';



import {HashRouter , BrowserRouter,Switch,Routes,Route,Link,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




class App extends Component  {
state={
  total_prices:0,
  carditems:[
 
]
}

removeAll=()=>{
  let carditems=[]
  let total_prices=0;
  this.setState({carditems});
  this.setState({total_prices});

}
removeItem=(id,tag)=>{
  let carditems =[...this.state.carditems];
  let total_prices=this.state.total_prices
  for( let j=0;j<carditems.length;j++){
    if (carditems[j].tag==tag && carditems[j].id==id){
      
      total_prices-=carditems[j].price*carditems[j].Quantity;
    }
  }
  carditems=this.state.carditems.filter(c => {
    
    return c.tag!=tag || c.id !=id ;
  }); 

  
  this.setState({carditems});
  this.setState({total_prices});




}
increase=(id,tag)=>{
  const carditems =[...this.state.carditems];
    
    let total_prices=this.state.total_prices
    for( let j=0;j<carditems.length;j++){
      if (carditems[j].tag==tag && carditems[j].id==id){
        carditems[j].Quantity++;
        total_prices+=carditems[j].price;
      }
    }

    this.setState({carditems});
    this.setState({total_prices});
}
decrease=(id,tag)=>{
  const carditems =[...this.state.carditems];
    
    let total_prices=this.state.total_prices
    for( let j=0;j<carditems.length;j++){
      if (carditems[j].tag==tag && carditems[j].id==id &&carditems[j].Quantity>1){
        carditems[j].Quantity--;
        total_prices-=carditems[j].price;


      }
    }

    this.setState({carditems});
    this.setState({total_prices});
}
addtoCart=(carditem)=>{
  const carditems =[...this.state.carditems];
    let i=carditems.length;
    
    let flag=0;
    let total_prices=this.state.total_prices
    for( let j=0;j<carditems.length;j++){
      if (carditems[j].tag==carditem.tag && carditems[j].id==carditem.id){
        flag=1;
      }
    }
    if (flag==0)
    {
      carditems[i]={'tag':carditem.tag,'id':carditem.id,"name":carditem.name,"Im":carditem.Im,"Quantity":1,"price":parseInt(carditem.price)}
      total_prices+=carditems[i].price;
    }
  
  
   this.setState({carditems});
   this.setState({total_prices});


}
  
  
  render(){
   
  return (

    <Routes >
     <Route  path={'/mycart'} element=
      { 
        <div className=""> 
          <Cart
          carditems={this.state.carditems}
          removeAll={this.removeAll}
          removeItem={this.removeItem}
          increase={this.increase}
          decrease={this.decrease}
          total_prices={this.state.total_prices}
          />
        </div> 
      }/>
      <Route  path={'/home'} element=
      { 
        <div className=""> 
          <Home
          addtoCart={this.addtoCart}
          carditems={this.state.carditems}
          />
        </div> 
      }/>

       <Route  path={'/'} element=
      { 
        <div className="reserve_bg"> 
   
          <img src={logo} className='logo'  alt="logo" />
          <p class="opening-date">Opening will be on 31th May</p>
          <Link  class="btn   reserve_seat" type="submit" to="/home">Book Your seat </Link >
        </div> 
      }/>
   
 
   
 
    </Routes>
    

    
    
  );
}
}
export default App;