import React, { Component } from 'react';
import Cartitem from './Cartitems';

var cart = [];


setInterval(() => {
    var temp = JSON.parse(localStorage.getItem('data'))
    if(cart == null){
       cart = []
    }
    
    //console.log(cart);
}, 1000);


class Navbar extends Component{
    constructor(){
        super()
        this.state ={
            len:cart.length
        }
    }

    
    update(){
        
        setInterval(() => {
           
                //console.log(this.state.len)
                this.setState(()=>{
                    this.state.len = cart.length;
                });
                
            }, 1000)
        
        }
        
       
    
    


    render(){
       return(
        <div>
         <div className="mynavbar ">
             <div>
                 <i className="fa fa-bars"></i>
             </div>
             <div><b>Comphy Furnitures</b></div>
                <div>
                
                    <button type="button" className="btn" style={{fontSize:"1.1em",padding:"4px",float:"right"}}data-bs-toggle="modal" data-bs-target="#exampleModal">
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