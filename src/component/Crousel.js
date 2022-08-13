import React, { Component } from 'react';


class Crousel extends Component{
    render(){
        return (
            <div className="crousel">
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img src= "images/crousel_images/img_1.jpg"
                className="d-block w-100" alt="images not found"/>
              </div>
              <div className="carousel-item ">
                <img src="images/crousel_images/img_2.jpg"
                className="d-block  w-100" alt="images not found"/>
              </div>
              <div className="carousel-item">
                <img src= "images/crousel_images/img_3.jpg"
                className="d-block  w-100" alt="images not found"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        );
    }
}

export default Crousel