import React, { Component } from 'react';
import Nav from './navbar';
import Im from './bg.jpg'

import Cards from './cards';
// import Footer from './footer';
import { Link } from "react-router-dom";




export default class userhomepage extends Component {
    state={
      filter:"TACOS"
}

handelCombos=()=>{
    this.setState({filter:"COMBOS"})
}
handelTacos=()=>{
    this.setState({filter:"TACOS"})
}
handelBURRITOS=()=>{
    this.setState({filter:"BURRITOS"})
}
handelGROUPS=()=>{
    this.setState({filter:"GROUPS"})
}
handelDRINKS=()=>{
    this.setState({filter:"DRINKS"})
}
handelDESSERTS=()=>{
    this.setState({filter:"DESSERTS"})
}
handelSPECIALTIES=()=>{
    this.setState({filter:"SPECIALTIES"})
}
handelSIDES=()=>{
    this.setState({filter:"SIDES"})
}
handelTUESDAYS=()=>{
    this.setState({filter:"TACO TUESDAYS"})
}



    render() {

        return (
            <div >
                
                     <Nav/>
                
                    <img src={Im} alt="" className="responsive-image" ></img>

                    {/* <div className="Facial_recognition">Facial recognition</div> */}

                    <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                    <div className=" navbar-collapse" id="navbarSupportedContent">
                                        <div className="text-start  h4 font-weight-bold ml-3">Menu</div>


                                    </div>
                                </div>           
                            </nav>
                    </div>
                    <div className="  ">
                            <nav className="navbar navbar-expand-sm navbar-light bg-light ">
                      
                                <div className="container-fluid">
                                    <div className=" navbar-collapse filters ">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class={"btn  ml-5 text_size menuitem  " +(this.state.filter==="COMBOS" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={()=>this.handelCombos()}/> COMBOS
                                            </label>
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="TACOS" ? " btn-secondary" : '')} >
                                                <input type="radio" name="options" id="option2" autocomplete="off" onClick={()=>this.handelTacos()}/> TACOS
                                            </label>
                                            <label  class={"btn  ml-5 text_size  " +(this.state.filter==="BURRITOS" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option3" autocomplete="off"onClick={()=>this.handelBURRITOS()}/> BURRITOS
                                            </label>
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="SPECIALTIES" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={()=>this.handelSPECIALTIES()}/> SPECIALTIES
                                            </label>
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="SIDES" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option2" autocomplete="off" onClick={()=>this.handelSIDES()}/> SIDES
                                            </label>
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="DESSERTS" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={()=>this.handelDESSERTS()}/> DESSERTS
                                            </label>
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="DRINKS" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option2" autocomplete="off" onClick={()=>this.handelDRINKS()}/> DRINKS
                                            </label>
                                        
                                            <label class={"btn  ml-5 text_size  " +(this.state.filter==="GROUPS" ? " btn-secondary" : '')}>
                                                <input type="radio" name="options" id="option2" autocomplete="off" onClick={()=>this.handelGROUPS()}/> GROUPS
                                            </label>
                                         
                                        </div>
                                        
                                      


                                    </div>
                                </div>           
                            </nav>
                    </div>

           
                    <Cards
                    
                    filter={this.state.filter}
                    addtoCart={this.props.addtoCart}
                    />
                    <Link className={this.props.carditems.length==0?'d-none':'checkout btn'} to="/mycart">Checkout <span className='rounded-circle'>({this.props.carditems.length})</span></Link>                   
                     
                   {/* <Footer/> */}
                   
                  
            </div>
        )
    }

}