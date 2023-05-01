import React, { Component } from 'react';
import Nav from './navbar';
import Im from './bg.jpg'

import Cards from './cards';
// import Footer from './footer';


export default class userhomepage extends Component {
 


    render() {

        return (
            <div >
                
                     <Nav/>
                
                    <img src={Im} alt="" className="responsive-image" ></img>

                    {/* <div className="Facial_recognition">Facial recognition</div> */}

                    <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="text-start  h4 font-weight-bold ml-3">Menu</div>


                            </div>
                            </div>           
                        </nav>
                    </div>

                    {/* <div className='container'>
                        <h1 className="problem_describtion">Problem Description</h1>
                       
                            <p className='text-left'>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Face recognition is a method that allows us to identify individuals using their faces. This capability of identifying people is very helpful, and it has a wide range of applications in different sectors. It can be used in healthcare to, for example, facilitate the process of patients’ check-in by determining their identities and insurance data, in schools for security purposes or attendance monitoring, or in stores for fraud prevention. It has been used for different covid-related applications as well.
                                Face recognition applications have been increasing significantly over the recent few decades. There are major advancements in this technology, including a very important research area which is emotional intelligence in which facial recognition systems are capable of interpreting people’s emotions.
                                We have ound this topic very interesting due to the variety of its amazing, powerful applications. </p> 
                    </div>         */}
                    <Cards/>
                    
                     
                   {/* <Footer/> */}
                   
                  
            </div>
        )
    }

}