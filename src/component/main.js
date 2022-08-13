import React, { Component } from 'react'
import Crousel from './Crousel';
import Navbar from './Navbar';
import Items from './Items'
class Main extends Component {
    constructor(){
        super()
        this.state = {
            cart : []
        }
    }

    componentDidMount = ()=>{
        
        let temp = JSON.parse(localStorage.getItem('data'));
        if(temp == null)temp = [];

        this.setState(
            {
                cart:temp
            }
        )
        
    }
    componentWillUnmount= ()=>{
        localStorage.removeItem('data')
    }

    additem=async(product) =>{
        var flag = false;
        
        this.state.cart.forEach((item) => {
            if(item.key === product.key)flag = true;
        })
      
        if(!flag){
           
           await this.setState(
               {
                    cart:[...this.state.cart,product]
               }
           )

           
        }
        

        localStorage.setItem('data',JSON.stringify(this.state.cart))
        
    }

    clearCart = async() =>{
        await this.setState(
            {
                cart :[]
            }
        )
        localStorage.removeItem('data',[])
        console.log("closing")
        // localStorage.setItem('data',JSON.stringify(this.state.cart))
    }

    increment = (id)=>{
        let temp = this.state.cart;
        temp[id].data.quantity++;
        this.setState(
            {
                cart:temp
            }
        )
        localStorage.setItem('data',JSON.stringify(this.state.cart))
    }

    decrement = (id)=>{
        let temp = this.state.cart;
        if(temp[id].data.quantity > 1)temp[id].data.quantity--;
        this.setState(
            {
                cart:temp
            } 
        )
        localStorage.setItem('data',JSON.stringify(this.state.cart))
    }

    remove = (id)=>{
        let temp = this.state.cart;
        temp.splice(id,1);
        this.setState(
            {
                cart:temp
            }
        )
        localStorage.setItem('data',JSON.stringify(this.state.cart))
    }
  
    render() {
    
        return (
            <div>
                <Navbar cart = {this.state.cart} close={this.clearCart} inc={this.increment} dec={this.decrement} rem={this.remove}/>
                <Crousel/>
                <hr/>
                <b> <h1 style={{textAlign:"center",margin:"10px"}}>Our Products</h1></b>
                <hr/>
                <Items  add={this.additem} cart = {this.state.cart}/>          
            </div>
        )
    }
}

export default Main
