import React, { Component } from 'react';

class Model extends Component {
    render() {
        return (
            <div className="modal fade" id ={"details" +this.props.item.key} tabIndex="-1" aria-labelledby={"details" +this.props.item.key}  aria-hidden = "true">
                              <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                     <h5 className="modal-title">ITEM DETAILS</h5>
                                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                      <img src={this.props.item.data.location} className="detailImg" alt="not found"></img>
                                      <div>
                                          {this.props.item.details.map((s,i) => (
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
                                      <button  className="btn btn-primary" id={"cartadd" + this.props.item.key} onClick={()=>this.props.add(this.props.item)} ></button>
                                      <button className="btn btn-secondary">Close</button>
                                  </div>
                              </div>
                              </div>
                          </div>
        );
    }
}

export default Model;
