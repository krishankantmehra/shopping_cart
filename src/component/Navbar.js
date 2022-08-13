import React, { Component } from 'react';
import Cartitem from './Cartitems';



class Navbar extends Component{
    render(){
       return(
        <div className="mynav">
         <div className="container-fluid navbar navbar-expand-md navbar-light bg-white fixed-top justify-content-between shadow-lg" style={{fontSize:"1.5em"}}>
             
             <div id="LOGO" className='d-flex flex-row justify-content-center align-items-center'>
                <img id="logo-img" src="logo.png" alt="NOT FOUND"/>
                <p><b>Comphy Life</b></p>
            </div>
                <div>
                
                    <button type="button" id="CART" className="btn1 sticky-top" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-shopping-cart"></i>
                    </button>

                    <span id="cartSize">{this.props.cart.length}</span>
                   
                </div>
         </div>
         
            <Cartitem cart={this.props.cart} close={this.props.close} inc={this.props.inc} dec={this.props.dec} rem={this.props.rem}/>
         </div>
       )
    }
}
export default Navbar;