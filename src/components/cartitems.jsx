
import React, { Component } from 'react';


import Item from './carditem';


// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Cards extends Component {
        


                    
                



    render() {

        return (
            <div className=' '>
                 {this.props.carditems.map((card) => (
             
                    <Item
                    name={card.name}
                    Quantity={card.Quantity}
                    Im={card.Im}
                    tag={card.tag}
                    id={card.id}
                    price={card.price}
                    removeItem={this.props.removeItem}
                    increase={this.props.increase}
                    decrease={this.props.decrease}
                    
                  
                    />
                
                )) } 
           

            </div>
            )
        }
    
    }