import React from "react";
import Inventory from './Inventory.json';


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
                          <div className="modal fade" id ={"details" +item.key} tabIndex="-1" aria-labelledby={"details" +item.key}  aria-hidden = "true">
                              <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                     <h5 className="modal-title">ITEM DETAILS</h5>
                                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                      <button  className="btn btn-primary" id={"cartadd" + item.key} onClick={()=>this.props.add(item)} >Add to cart</button>
                                      <button className="btn btn-secondary">Close</button>
                                  </div>
                              </div>
                              </div>
                          </div>
  
  
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