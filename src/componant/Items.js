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
                   
                    <div className="card shadow m-3"  data-bs-toggle="modal" data-bs-target = {"#details" + item.key}   onMouseOver={()=>check(item,props.cart)} key={i}>
                        
                        {/* <button  className="addToCart shadow" data-bs-toggle="modal" data-bs-target = "#details" onClick={()=>props.add(item)} >Add</button> */}
                        
                        {/* modal */}
                        <div className="modal fade" id ={"details" +item.key} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    Item details
                                </div>
                                <div className="modal-body">
                                    <img src={item.data.location} className="detailImg" alt="not found"></img>
                                    <div>
                                        {item.details.map((s,i) => (
                                            <div key={i} className="text-center d-flex flex-row justify-content-between">
                                                <div  className="col-6 text-capitalize text-start">
                                                    <b>{s[0]}</b>
                                                </div>
                                                <div className="col-6 text-end">
                                                    {s[1]}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={()=>props.add(item)} >Add to cart</button>
                                    <button className="btn btn-secondary">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div id="cardBody"> 
                        <img src={item.data.location}  className="card-img-top image" alt="Not found"/>
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