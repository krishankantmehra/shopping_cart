import React from "react";
import Inventory from './Inventory.json';
import Model from "./model";


class Items extends React.Component {
    
      cartadd(){
         const data = JSON.parse(localStorage.getItem("data"))
        
        Inventory.forEach(element => {
            document.getElementById("cartadd" + element.key).innerText = "Add To Cart"
            document.getElementById("cartadd" + element.key).disabled = false;
        })
        if(data === null)return;
        
        data.forEach(element => {
            document.getElementById("cartadd" + element.key).innerText = "ALREADY IN CART"
            document.getElementById("cartadd" + element.key).disabled = true;
        });
      }
    
      render(){
        return (  
            <div className="Products" >
                 {Inventory.map((item,i) => (
                     
                      <div className="Card shadow m-3"  data-bs-toggle="modal" data-bs-target = {"#details" + item.key} onClick={()=>this.cartadd()} key={i}>
                  
                          {/* modal */}
                          <Model item = {item} add={this.props.add}/>
  
                          <div className="cardBody"> 
                          <img src={item.data.location}  className="card-img-top image" alt="Not found"/>
                          <div className="card-body align-text-bottom my-auto">
                              <h5 className="card-title">{item.data.name}</h5>
                              <p className="itemPrice"><b>Rs. {item.data.price}</b></p>
                              
                          </div>
                          </div>
                      </div>
                 ))}
            </div>
         )
   
      }
    }


export default Items;