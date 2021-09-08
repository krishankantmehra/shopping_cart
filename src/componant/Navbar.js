import React, { Component } from 'react';
import Cartitem from './Cartitems';



class Navbar extends Component{
    render(){
       return(
        <div className="mynav">
         <div className="mynavbar ">
             <div>
                 <i className="fa fa-bars"></i>
             </div>
             <div><b>Comphy Life</b></div>
                <div>
                
                    <button type="button" className="btn1" style={{fontSize:"1.1em",padding:"4px",float:"right"}}data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-shopping-cart"></i>
                    </button>

                    <span id="cartSize">{this.props.cart.length}</span>
                   
                </div>
         </div>
            <Cartitem style={{position:"relative"}} cart={this.props.cart} close={this.props.close} inc={this.props.inc} dec={this.props.dec} rem={this.props.rem}/>
         </div>
       )
    }
}
export default Navbar;