
import React, { Component } from 'react';

import GUI from './bg.jpg'
import Face from './bg.jpg'
import Tag from './bg.jpg'
import Im from './bg.jpg'
import Card from './card';


// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Cards extends Component {
        state={
                cards:[
                    {"task":"tagging",
                     "desciption":"A feature for the user to tag people.",
                     "Im":Tag,
                     "percentage":100,
                     "color":"green"},
                    {"task":"Face Recognition", "desciption":"Training a model to recognise a person from set of known classes \n\n","Im":Face,"percentage":100,"color":"green"},
                    {"task":"GUI", "desciption":"Creating an GUI for the users to interact with our program","Im":GUI,"percentage":100,"color":"green"},
                    {"task":"Future Improvement", "desciption":"Area of improvement","Im":GUI,"percentage":0,"color":"red"},
                    // {"task":"2"}
                ]
        }


    render() {

        return (
            <div className='container mt-4'>
                 {this.state.cards.slice(0, 8).map((card) => (
             
                    <Card
                    task={card.task}
                    desciption={card.desciption}
                    Im={card.Im}
                    percentage={card.percentage}
                    color={card.color}
                    />
                
                )) } 
           

            </div>
            )
        }
    
    }