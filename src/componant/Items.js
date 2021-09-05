import React from "react";
import { Component } from "react";
import Inventory from './Inventory.json'
import Navbar from './Navbar'

async function check(item,cart){
   var list = document.getElementsByClassName("addToCart")
   
   for(let i = 0;i<list.length;i++){
    var flag  = true;
    cart.forEach(k =>{
        if(item.key == k.key){
            list[i].innerHTML = "In the Cart";
            flag = false;
        }
        
    }
    

    )
    if(flag)list[i].innerHTML = "Add to Cart";
   }
}

function Items(props){
      
    
       return ( 
        
          <div className="Products">
               {Inventory.map((item,i) => (
                   
                    <div className="card" onMouseOver={()=>check(item,props.cart)}>
                        
                        <button  className="addToCart" onClick={()=>props.add(item)} >Add</button>

                        <div id="cardBody"> 
                        <img src={item.data.location}  className="card-img-top" alt="image not found"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.data.name}</h5>
                            <p id="itemPrice"><b>Rs. {item.data.price}</b></p>
                            
                        </div>
                        </div>
                    </div>
               ))}
          </div>
       )
 
    }


export default Items;