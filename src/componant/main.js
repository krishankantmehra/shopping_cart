import React, { Component } from 'react'
import Crousel from '../componant/Crousel';
import Navbar from '../componant/Navbar';
import Items from '../componant/Items'
class Main extends Component {
    constructor(){
        super()
        this.state = {
            cart : []
        }
    }

    componentDidMount = ()=>{
        //localStorage.removeItem('data');
        let temp = JSON.parse(localStorage.getItem('data'));
        if(temp == null)temp = [];

        this.setState(
            {
                cart:temp
            }
        )
        console.log(temp)
    }
    componentWillUnmount= ()=>{
        localStorage.setItem('data',[])
    }

    additem=async(product) =>{
        var flag = false;
        
        this.state.cart.forEach((item) => {
            if(item.key === product.key)flag = true;
        })
        product.data.quantity = 1
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
        localStorage.setItem('data',[])
        console.log("closing")
        localStorage.setItem('data',JSON.stringify(this.state.cart))
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

                <b> <h1 style={{textAlign:"center",margin:"10px"}}>Our Products</h1></b>
                <hr/>
                <Items  add={this.additem} cart = {this.state.cart}/>
            </div>
        )
    }
}

export default Main
