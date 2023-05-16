
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Prog from './circular_bar';

// import Im from './travelll.jpg'
// import Card from './card';

// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Card extends Component {
 


    render() {

        return (
            <div>
                <div className="cards">    
                <div  className=" shadow" style={{width: "18rem", backgroundColor:"white"}}>
                    <div className="d-block text-decoration-none text-dark  card-body card_text"  >
                        
                        <img src={this.props.Im} className="card-img-top cropped1" />
                        <h6 className="text-capitalize card-title">{this.props.name}</h6>
                        <p className=" card-text ">{this.props.desciption}</p> 

                    </div>
                    <button className='btn card_button fa fa-shopping-cart mb-2 ' onClick={()=>this.props.addtoCart(this.props.card)}> Add to my Cart</button>
                  </div>    
                </div>      
            </div>
            )
        }
    
    }