
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from './navbar';
import Cartitems from './cartitems';
export default class MyCart extends Component {
 
    state={
        email:'',
        checkedout:0,

    }
handelemail=(e)=>{
    this.setState({email : e.target.value})
}
handelcheckout=()=>{
    if(this.state.email!=''){
        // alert("Congratulations!! Your Seat has been booked with these items")
        this.setState({checkedout:1})
        console.log(this.state.checkedout,this.state.email)
    }else{
        alert ("Enter Your Email")
    }

}

    render() {


        return (
            <div >
                {this.state.checkedout && this.state.email!==''?<div>
                    <div className='blurrybg'></div>
                    <div className=''>
                        <div className='overlay bg-light shadow container text-danger font-weight-bold'> 
                                    <div className='mb-5'>Congratulations!! Your Seat has been booked with these items</div>
                                    <div className='d-flex flex-row'> <Link className='btn btn-success ' to ="/home">Return to Home</Link></div>
                        </div>
                    </div>
                </div>:null}
                
               <Nav/>
                
               <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                    <div className=" navbar-collapse" id="navbarSupportedContent">
                                        <div className="text-start  h4 font-weight-bold ml-3">Shopping Cart</div>
                                    </div>
                                </div>           
                            </nav>
                </div>
                <div className=' cointainer rounded  shadow  slot bg-secondary  cart-padding'>

                    <div class="header">
                        <h1 className='text-light'>Items</h1>
                        <button className='btn bg-danger text-light float-right ' onClick={this.props.removeAll}>Remove all</button>
                    </div>
                    <div className=' '>
                        <Cartitems
                        carditems={this.props.carditems}
                        removeItem={this.props.removeItem}
                        increase={this.props.increase}
                        decrease={this.props.decrease}
                        
                        />
                    </div>
                    <div>

                   
                       {this.props.carditems.length?
                        <div>
                            <div className='d-flex flex-row-reverse'>
                                
                                <button className='btn bg-success text-light w-3' onClick={()=>this.handelcheckout()}>Checkout</button>
                                <h3 className='pr-3 text-light'>Total:{this.props.total_prices} </h3>
                                
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <input className='email form-control' placeholder="Enter Your Email" onChange={(e)=>this.handelemail(e)}></input>
                                {/* <h1>{this.state.email}</h1> */}
                            </div>
                        </div>:null
                        }
                   
                    </div>
                </div>
            </div>
            
            )
        }
    
    }