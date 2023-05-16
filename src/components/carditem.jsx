

                        
import React, { Component } from 'react';


export default class Carditem extends Component {
 


    render() {

        return (
            <div className='cointainer rounded shadow bg-light p-2 mb-3'>
                <div className=''>
                        <i className='fa fa-coffee m-3'> </i>
                        <span className='font-weight-bold m-1 fs-6 ml-6 mt-3'>{this.props.name}</span>
                </div>
                <div className='row'>
                            
                            <div className='col-4'>
                                <img className='cropped1_cart'src={this.props.Im}/>
                            </div>
                            {/* <div className='col-2'>
                                <div class="about ml-2">
                                    <h1>Item 1</h1>
                                    <h3>$10</h3>
                                </div>
                                
                            </div> */}
                            <div class="counter col-2">
                                    <div class="btn" onClick={()=>this.props.increase(this.props.id,this.props.tag)}>+</div>
                                    <div class="count">{this.props.Quantity}</div>
                                    <div class="btn" onClick={()=>this.props.decrease(this.props.id,this.props.tag)}>-</div>
                            </div>
                            <div className="total col-6">
                                <h3> {this.props.price*this.props.Quantity}<i className='fa fa-dollar' ></i></h3>
                                <button className='bg-danger' onClick={()=>this.props.removeItem(this.props.id,this.props.tag)}>remove</button>
                            </div>
                    </div>
            </div>
            )
        }
    
    }