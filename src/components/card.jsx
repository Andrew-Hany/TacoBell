
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
                    <Link className="d-block text-decoration-none text-dark shadow card-body" style={{width: "18rem", backgroundColor:"white",cursor:"pointer"}} to={"/"+this.props.task}>
                        <img src={this.props.Im} className="card-img-top cropped1" />
                        <h6 className="text-capitalize card-title">{this.props.task}</h6>
                        <p className=" card-text fs-6 ">{this.props.desciption}</p>
                        
                       {/* <Prog
                       percentage={this.props.percentage}
                       color={this.props.color}
                       /> */}
                        
                       
                       
                    </Link>    
                </div>      
            </div>
            )
        }
    
    }