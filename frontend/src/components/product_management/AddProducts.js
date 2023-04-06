import React, { Component } from 'react'
import NavBar from "../Navbar";

export default class AddProducts extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
              


<div id="createlab" class="card-body bg-light">
            <div className="col-md-3 mx-auto" ><br></br>
                <h1 class="text-center">Add New Product</h1>
             
                    <form id="lab" className="createlabs" >
                        <div className="labtypes" style={{marginBottom:"35px"}}>

                            <label style={{marginBottom:'5px'}}>Product Name</label>
                            <input type="text"
                            className="form-control"
                            name="labType"
                            placeholder="Enter Product Name"
                           />
                        </div>
                        <div className="labassistants" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>Product Description</label>
                            <input type="text"
                            className="form-control"
                            name="assignedLabAssistant"
                            placeholder="Enter Product Details"
                            />
                        </div>
                        <div className="labassistants" style={{marginBottom:"25px"}}>
                            <label style={{marginBottom:'5px'}}>Product Price</label>
                            <input type="text"
                            className="form-control"
                            name="assignedLabAssistant"
                            placeholder="Enter Product Price"
                            />
                        </div>
                    </form>

                    <br></br>
                    <div class="d-grid gap-2 col-8 mx-auto">
                    <button className="btn btn-primary" type="submit" id="myBtn2" style={{marginTop:'1px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add
                        </button>
                        </div>
            </div>

            </div>




            
      </div>
    )
  }
}
