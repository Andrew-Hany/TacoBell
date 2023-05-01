import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Im from './logo.jpeg'
export default class navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
         
          <Link className="navbar-brand" onClick={this.props.userHomepagetoggle} style={{cursor: "pointer"}} to="/">BLOG</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active"  aria-current="page" onClick={this.props.userHomepagetoggle} style={{cursor: "pointer"}}>Home</a> */}
                  <Link className="nav-link active"  aria-current="page" onClick={this.props.userHomepagetoggle} style={{cursor: "pointer"}} to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" onClick={this.props.userPagetoggle} style={{cursor: "pointer"}}>About us</a> */}
                <Link className="nav-link" onClick={this.props.userPagetoggle} style={{cursor: "pointer"}} to="/about">About us</Link> 
                       {/* <Link className="nav-link" onClick={this.props.userPagetoggle} style={{cursor: "pointer"}} to="/profile">Profile</Link> */}

              </li>
             

            </ul>
           
            <div className="d-flex">
            <div className="text-capitalize text-light">{this.props.user_fname} {this.props.user_lname}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="fas fa-user-alt fs-2 text-light"></div>
            </div>

          </div>
        </div>
      </nav>
      </div>
    );
  }
}
