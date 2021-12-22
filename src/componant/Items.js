import React from "react";
import Inventory from './Inventory.json';

async function check(item,cart){
   var list = document.getElementsByClassName("addToCart")
   
   for(let i = 0;i<list.length;i++){
    let flag  = true;
    cart.forEach(k =>{
        if(item.key === k.key){
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
                   
                    <div className="card shadow m-3" onMouseOver={()=>check(item,props.cart)} key={i}>
                        
                        <button  className="addToCart shadow" onClick={()=>props.add(item)} >Add</button>

                        <div id="cardBody"> 
                        <img src={item.data.location}  className="card-img-top" alt="Not found"/>
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