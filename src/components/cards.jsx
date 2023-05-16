
import React, { Component } from 'react';

import Im1 from '../images/Naked Chicken taco.PNG'
import Im2 from '../images/Crunchy Taco.PNG'
import Im3 from '../images/Soft_Taco.PNG'
import Im4 from '../images/Crunchy_Taco_Supreme.PNG'
import Im5 from '../images/Soft_Taco_supreme.PNG'
import Im6 from '../images/Crispy_chicken Soft Taco.PNG'
import Im7 from '../images/shawerma.png'
import Im8 from '../images/Flafel Taco.PNG'

import Im9 from '../images/COMBOS1.png'
import Im10 from '../images/COMBOS2.png'
import Im11 from '../images/COMBOS3.png'
import Im12 from '../images/COMBOS4.png'
import Im13 from '../images/COMBOS5.png'
import Im14 from '../images/COMBOS6.png'
import Im15 from '../images/COMBOS7.png'


import Im16 from '../images/BURRITOS1.png'
import Im17 from '../images/BURRITOS2.png'
import Im18 from '../images/BURRITOS3.png'
import Im19 from '../images/BURRITOS4.png'
import Im20 from '../images/BURRITOS5.png'
import Im21 from '../images/BURRITOS6.png'
import Im22 from '../images/BURRITOS7.png'

import Im23 from '../images/SPECIALTIES1.png'
import Im24 from '../images/SPECIALTIES2.png'
import Im25 from '../images/SPECIALTIES3.png'
import Im26 from '../images/SPECIALTIES4.png'
import Im27 from '../images/SPECIALTIES5.png'
import Im28 from '../images/SPECIALTIES6.png'

import Im29 from '../images/SIDES1.png'
import Im30 from '../images/SIDES2.png'
import Im31 from '../images/SIDES3.png'
import Im32 from '../images/SIDES4.png'
import Im33 from '../images/SIDES5.png'
import Im34 from '../images/SIDES6.png'
import Im35 from '../images/SIDES7.png'
import Im36 from '../images/SIDES8.png'
import Im37 from '../images/SIDES9.png'
import Im38 from '../images/SIDES10.png'
import Im39 from '../images/SIDES11.png'

import Im40 from '../images/DESSERTS1.png'
import Im41 from '../images/DESSERTS2.png'
import Im42 from '../images/DESSERTS3.png'
import Im43 from '../images/DESSERTS4.png'
import Im44 from '../images/DESSERTS5.png'

import Im45 from '../images/DRINKS1.png'
import Im46 from '../images/DRINKS2.png'
import Im47 from '../images/DRINKS3.png'
import Im48 from '../images/DRINKS4.png'
import Im49 from '../images/DRINKS5.png'
import Im50 from '../images/DRINKS6.png'
import Im51 from '../images/DRINKS7.png'
import Im52 from '../images/DRINKS8.png'
import Im53 from '../images/DRINKS9.png'

import Im54 from '../images/GROUP1.png'




import Card from './card';


// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Cards extends Component {
        state={
                cards:[
                   
                    {'price':"80",'tag':'TACOS','id':1,"name":"NAKED CHICKEN TACO", "desciption":"A crispy chicken shell filled with crispy lettuce, diced tomatoes, 3 cheese blend and the choice of Cali Ranch Sauce (Mild) or Lava Sauce (Wild) \n\n","Im":Im1},
                    {'price':"80",'tag':'TACOS','id':2,"name":"CRUNCHY TACO", "desciption":"The Stuff of Legends. The Crunchy Taco has a crunchy corn body and a wicked haymaker. What you see is what you get with the Crunchy Taco; no hidden agendas with this guy. Hard. Crunchy. Delicious. \n\n","Im":Im2},
                    {'price':"100",'tag':'TACOS','id':3,"name":"SOFT TACO", "desciption":"Floating on a cloud. Instead of a tough corn shell, the Soft Taco has a warm, flour tortilla, but has the same ingredients with its seasoned beef, lettuce, and real cheddar cheese. It’s Dreamy. It’s Soft. It’s Delicious. It’s the Soft Taco. \n\n","Im":Im3},
                    {'price':"85",'tag':'TACOS','id':4,"name":"CRUNCHY TACO SUPREME", "desciption":"Our tacos are so good, it’s in our name. Get yours in a crunchy or soft shell and enjoy this beefy classic. Adding in ripe diced tomatoes and cool sour cream is what makes it ‘Supreme’. \n\n","Im":Im4},
                    {'price':"105",'tag':'TACOS','id':5,"name":"SOFT TACO SUPREME", "desciption":"YAS QUEEN SUPREME. While the Soft Taco is, you guessed it, soft, the Soft Taco Supreme® is even softer, but totally owns it. Seasoned beef, lettuce and real cheddar cheese, plus cool sour cream and fresh diced tomatoes makes this taco the real Supreme Queen. \n\n","Im":Im5},
                    {'price':"80",'tag':'TACOS','id':6,"name":"CRISPY CHICKEN SOFT TACO", "desciption":"No better pick-me-up snack than this one, it’s crispy chicken, our creamy Cali Ranch sauce and refreshing lettuce all wrapped in a soft flour tortilla then topped with shredded cheddar cheese. \n\n","Im":Im6},
                    {'price':"85",'tag':'TACOS','id':7,"name":"SHAWRMA TACO", "desciption":" \n\n","Im":Im7},
                    {'price':"70",'tag':'TACOS','id':8,"name":"FALAFEL TACO", "desciption":" \n\n","Im":Im8},

                    {'price':"130",'tag':'COMBOS','id':1,"name":"NAKED CHICKEN TACO MEAL", "desciption":"A crispy chicken shell filled with crispy lettuce, diced tomatoes, 3 cheese blend and the choice of Cali Ranch Sauce (Mild) or Lava Sauce (Wild)  Includes regular seasoned fries and a regular drink. \n\n","Im":Im9},
                    {'price':"135",'tag':'COMBOS','id':2,"name":"CRUNCHWRAP SUPREME MEAL", "desciption":"One of Taco Bell’s most recognizable and unique creations, the Crunchwrap is a one-handed staple packed full of our signature Mexican-inspired ingredients. That means you get EVERY flavor in EVERY bite. Served with fries and a regular drink. \n\n","Im":Im10},
                    {'price':"120",'tag':'COMBOS','id':3,"name":"VOLCANO BURRITO MEAL", "desciption":"Everybody knows that the best burritos have their place, their click, their ‘calling’. The Volcano Burrito is the ‘all-rounder’ of Burritos. You want something spicy? Tick. You want something crunchy? Tick. You want something with all the signature Taco Bell flavours? Tick. Just get yourself a Volcano Burrito and you’ll see too. Served with fries and a regular drink. \n\n","Im":Im11},
                    {'price':"180",'tag':'COMBOS','id':4,"name":"TWO TACO SUPREME MEAL", "desciption":"Sometimes soft, sometimes crunchy, but always delicious. Choose your shell (soft or crunchy tortilla) filled with your choice of protein, sour cream, tomato, shredded lettuce and cheese. Served with fries and a regular drink. \n\n","Im":Im12},
                    {'price':"120",'tag':'COMBOS','id':5,"name":"QUESADILLA MEAL", "desciption":"The rich, melty cheese sets the quesadilla apart. It’s folded and grilled flat for perfect portable snacking. Served with fries and a regular drink. \n\n","Im":Im13},
                    {'price':"110",'tag':'COMBOS','id':6,"name":"CRISPY CHICKEN BURRITO MEAL", "desciption":"Soft flour tortilla, two crispy chicken strips, creamy jalapeño style sauce, crisp lettuce, diced tomatoes and cheddar cheese. Includes a regular seasoned fries and a regular drink. \n\n","Im":Im14},
                    {'price':"160",'tag':'COMBOS','id':7,"name":"CHALUPA SUPREME MEAL", "desciption":"The World Famous Chalupa – crispy and flaky on the outside but soft and chewy on the inside, filled with Classic Taco Bell flavours (seasoned beef, lettuce, tomatoes and 3 cheese blend and sour cream). Served with fries and a regular drink. \n\n","Im":Im15},
                   
                   
                    {'price':"100",'tag':'BURRITOS','id':1,"name":"7 LAYER BURRITO", "desciption":"With 7-layers of completely different and delicious ingredients \n\n","Im":Im16},
                    {'price':"120",'tag':'BURRITOS','id':2,"name":"VOLCANO BURRITO", "desciption":"Everybody knows that the best burritos have their place, their click, their ‘calling’. The Volcano Burrito is the ‘all-rounder’ of Burritos. You want something spicy? Tick. You want something crunchy? Tick. You want something with all the signature Taco Bell flavours? Tick. Just get yourself a Volcano Burrito and you’ll see too. \n\n","Im":Im17},
                    {'price':"110",'tag':'BURRITOS','id':3,"name":"CRISPY CHICKEN BURRITO", "desciption":"Soft flour tortilla, two crispy chicken strips, creamy jalapeño style sauce, crisp lettuce, diced tomatoes and cheddar cheese. What’s not to love? \n\n","Im":Im18},
                    {'price':"100",'tag':'BURRITOS','id':4,"name":"DOUBLE CHEESY BLACK BEAN CRAVINGS BURRITO", "desciption":"If Pioneers had Taco Bell, they would probably have eaten these. Back in the pioneering days, restless westward travelers would sit around the campfire and eat cans of beans to give them the much-needed energy to take on the unknown \n\n","Im":Im19},
                    {'price':"120",'tag':'BURRITOS','id':5,"name":"BEEFY NACHO CRAVINGS BURRITO", "desciption":"Can’t decide if you want a burrito or nachos? Now you don’t need to! With the Beefy Nacho Cravings Burrito, you can enjoy the best of both worlds. \n\n","Im":Im20},
                    {'price':"110",'tag':'BURRITOS','id':6,"name":"SPICY CHICKEN CRAVINGS BURRITO", "desciption":"OH MAN, SO FIESTY. The Spicy Chicken Cravings Burrito is no stranger to being grilled. With that kind of name, we can only imagine the trouble this Burrito can find itself in. Both literally and figuratively \n\n","Im":Im21},
                    {'price':"100",'tag':'BURRITOS','id':7,"name":"CHEESY ROLL-UP", "desciption":"Heavy metal. Astrophysics. The basic rules of football. However, sometimes something as simple as melted three-cheese blend rolled up in a flour tortilla is all you need. \n\n","Im":Im22},
                    
                    
                    {'price':"40",'tag':'SPECIALTIES','id':1,"name":"QUESADILLA", "desciption":"The rich, melty cheese sets the quesadilla apart. It’s folded and grilled flat for perfect portable snacking. \n\n","Im":Im23},
                    {'price':"45",'tag':'SPECIALTIES','id':2,"name":"CHEESE QUESADILLA", "desciption":"The Cheese Quesadilla may appear to be basic but it is all things great. In fact, the Cheese Quesadilla often gets offended when it is referred to as being basic. Do you blame it? It may be simple in nature with its flour tortilla, hefty portion of three-cheese blend, and creamy jalapeño sauce. But’s it’s simple for obvious reasons. Because it’s good. \n\n","Im":Im24},
                    {'price':"110",'tag':'SPECIALTIES','id':3,"name":"CRUNCHWRAP SUPREME", "desciption":"One of Taco Bell’s most recognizable and unique creations, the Crunchwrap is a one-handed staple packed full of our signature Mexican-inspired ingredients. That means you get EVERY flavor in EVERY bite. \n\n","Im":Im25},
                    {'price':"90",'tag':'SPECIALTIES','id':4,"name":"CHALUPA SUPREME", "desciption":"The World Famous Chalupa – crispy and flaky on the outside but soft and chewy on the inside, filled with Classic Taco Bell flavours (seasoned beef, lettuce, tomatoes and 3 cheese blend and sour cream). \n\n","Im":Im26},
                    {'price':"100",'tag':'SPECIALTIES','id':5,"name":"CHEESY GORDITA CRUNCH", "desciption":"Pillowy flatbread covered in melted cheese and wrapped around a crunchy taco shell filled with seasoned beef, crisp lettuce, cheddar cheese and Cali ranch sauce​. \n\n","Im":Im27},
                    {'price':"50",'tag':'SPECIALTIES','id':6,"name":"BABY QUESADILLA", "desciption":"The rich, melty cheese sets the baby quesadilla apart. It’s perfect portable snacking. \n\n","Im":Im28},
                   
                    {'price':"65",'tag':'SIDES','id':1,"name":"NACHOS BELL GRANDE", "desciption":"A large portion of seasoned nachos topped with extra warm nacho cheese sauce, black beans, seasoned beef, diced tomatoes and cool sour cream. \n\n","Im":Im29},
                    {'price':"50",'tag':'SIDES','id':2,"name":"FRIES BELL GRANDE", "desciption":"A large portion of seasoned fries topped with extra warm nacho cheese sauce, seasoned beef, diced tomatoes and cool sour cream. \n\n","Im":Im30},
                    {'price':"50",'tag':'SIDES','id':3,"name":"FRIES SUPREME", "desciption":"A regular portion of seasoned fries topped with warm nacho cheese sauce, seasoned beef, diced tomatoes and cool sour cream. \n\n","Im":Im31},
                    {'price':"60",'tag':'SIDES','id':4,"name":"SEASONED FRIES", "desciption":"Dip it, lick it, devour it. Not french fries. Seasoned Fries. \n\n","Im":Im32},
                    {'price':"40",'tag':'SIDES','id':5,"name":"BLACK BEANS", "desciption":"Loyalty never gets old. He’s your good old faithful. \n\n","Im":Im33},
                    {'price':"40",'tag':'SIDES','id':6,"name":"SEASONED RICE", "desciption":"Twice as nice. It’s not just rice. It’s seasoned rice. \n\n","Im":Im34},
                    {'price':"20",'tag':'SIDES','id':7,"name":"SOUR CREAM", "desciption":"The cool kid of the playground. \n\n","Im":Im35},
                    {'price':"20",'tag':'SIDES','id':8,"name":"NACHO CHEESE SAUCE", "desciption":"It’s basically warm, melted, cheese gold. \n\n","Im":Im36},
                    {'price':"20",'tag':'SIDES','id':9,"name":"JALAPEÑOS", "desciption":"Always. \n\n","Im":Im37},
                    {'price':"20",'tag':'SIDES','id':10,"name":"GUACAMOLE", "desciption":"My chip, my guac, my all day long snack. \n\n","Im":Im38},
                    {'price':"70",'tag':'SIDES','id':11,"name":"DIP CRAVINGS", "desciption":"Guacamole? Check. Sour Cream? Check. Nacho Cheese Sauce? Check. Jalapeños? Check \n\n","Im":Im39},
                    
                    {'price':"50",'tag':'DESSERTS','id':1,"name":"CINNAMON TWISTS", "desciption":"Do the twist. The cinnamon twist. Just a simple, innocent, delicious cinnamon sugar snack. \n\n","Im":Im40},
                    {'price':"60",'tag':'DESSERTS','id':2,"name":"CHURROS WITH DIP", "desciption":"Just a simple, innocent, delicious cinnamon sugar snack with a glorious dip. Or is it? Just kidding. That’s all it is. Simple and innocent but equally delicious. \n\n","Im":Im41},
                    {'price':"70",'tag':'DESSERTS','id':3,"name":"GRANDE CINNAMON TWISTS", "desciption":"Do the twist. The cinnamon twist. Just a simple, innocent, delicious cinnamon sugar snack. \n\n","Im":Im42},
                    {'price':"100",'tag':'DESSERTS','id':4,"name":"6 CHURROS + DIPS", "desciption":"A simple, innocent, delicious cinnamon sugar snack, six times over. Get dippin’. \n\n","Im":Im43},
                    {'price':"15",'tag':'DESSERTS','id':5,"name":"CARAMEL DIP", "desciption":"Now you can buy me on my own, for all your dipping needs. \n\n","Im":Im44},

                    {'price':"10",'tag':'DRINKS','id':1,"name":"PEPSI MAX", "desciption":"Quench that thirrst. \n\n","Im":Im45},
                    {'price':"10",'tag':'DRINKS','id':2,"name":"DIET PEPSI", "desciption":"Quench that thirrst. \n\n","Im":Im46},
                    {'price':"10",'tag':'DRINKS','id':3,"name":"PEPSI MAX CHERRY", "desciption":"Quench that thirrst. \n\n","Im":Im47},
                    {'price':"10",'tag':'DRINKS','id':4,"name":"TANGO ORANGE", "desciption":"Quench that thirrst. \n\n","Im":Im48},
                    {'price':"10",'tag':'DRINKS','id':5,"name":"TANGO APPLE", "desciption":"Quench that thirrst. \n\n","Im":Im49},
                    {'price':"10",'tag':'DRINKS','id':6,"name":"7UP FREE (500ML)", "desciption":"Quench that thirrst. \n\n","Im":Im50},
                    {'price':"10",'tag':'DRINKS','id':7,"name":"ROBINSON APPLE AND BLACKCURRANT", "desciption":"Quench that thirrst. \n\n","Im":Im51},
                    {'price':"10",'tag':'DRINKS','id':8,"name":"BOTTLED WATER (500ML)", "desciption":"Quench that thirrst. \n\n","Im":Im52},
                    {'price':"10",'tag':'DRINKS','id':9,"name":"MOUNTAIN DEW", "desciption":"Quench that thirrst. \n\n","Im":Im53},

                    {'price':"400",'tag':'GROUPS','id':9,"name":"CRAVINGS MEAL FOR 2", "desciption":"Date night? Yes pls.\n A choice of two specialities: Quesadilla, Crunchwrap Supreme, Cheese Quesadilla or Volcano Burrito. Two Crunchy Tacos, two Regular Fries with Nacho Cheese Sauce and two portion of Cinnamon Twists. \n\n","Im":Im54}



                    
                

                    
                   

                ]
        }


    render() {

        return (
            <div className='container '>
                 {this.state.cards.filter(meal=> meal.tag.includes(this.props.filter)).map((card) => (
             
                    <Card
                    card={card}
                    name={card.name}
                    desciption={card.desciption}
                    Im={card.Im}
                    tag={card.tag}
                    addtoCart={this.props.addtoCart}
                  
                    />
                
                )) } 
           

            </div>
            )
        }
    
    }