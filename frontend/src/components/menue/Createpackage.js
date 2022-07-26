import React, {Component, useState} from "react"
import axios from "axios";
export default class Createpackage extends Component{

    constructor(props){
        super(props);
        this.state={
            pDate :"",
            pDestination :"",
            pPackage :""
        }
    }
    handleInputChange=(e) =>{
         const {name,value} = e.target;

         this.setState({
             ...this.state,
             [name]:value
         })
    }

    onSubmit=(e) =>{
        e.preventDefault();

        const {pDate,pDestination,pPackage} = this.state;

        const data = {
            pDate:pDate,
            pDestination:pDestination,
            pPackage:pPackage
        }
        axios.post("http://localhost:8500/package/add",data).then((res)=>{
            
            if(res.data.success){
                alert('Data successfully Selected!');
                this.setState(
                    {
                        pDate:"",
                        pDestination:"",
                        pPackage:""
                    }
                )
            }
        })
        
    }

    render() {
        return(
                <div className="box">
                    
                    <center><h1 className="h3 mb-3 font-weight-normal">Select Your Trip</h1></center>
                    <form className="needs-validation" noValidate>

                      <div className ="container" >
           
            
            <table className ="table1">
                    <tr>
                    <th>
                    When Date:?<br/>
            
            <input type="date"  id="whendate" name="pDate" value={this.state.pDate} onChange={this.handleInputChange} required/>
            
                    <br/><br/>
            <div className ="pdetails-1">
            Destination:<br/>
                    <select class="form-select" aria-label="Default select example" name="pDestination"
                    value={this.state.pDestination} onChange={this.handleInputChange} required>
                        <option selected>select destination</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Dehiwala-Mount Lavinia">Dehiwala-Mount Lavinia</option>
                        <option value="Moratuwa">Moratuwa</option>
                        <option value="Sri Jayawardenepura Kotte">Sri Jayawardenepura Kotte</option>
                        <option value="Negombo"> Negombo</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Kalmunai">Kalmunai</option>
                        <option value="Vavuniya"> Vavuniya</option>
                        <option value="Galle"> Galle</option>
                        <option value="Trincomalee"> Trincomalee</option>
                        <option value="Batticaloa"> Batticaloa</option>
                        <option value="Jaffna "> Jaffna</option>
                        <option value="Katunayake"> Katunayake</option>
                        <option value="Dambulla"> Dambulla</option>
                        <option value="Kolonnawa"> Kolonnawa</option>
                        <option value="Ratnapura "> Ratnapura</option>
                        <option value="Matara ">Matara </option>
                        <option value="Hambantota">Hambantota </option>
                        </select></div>
                        <br/>
                        
                        <ul class="list-group list-group-horizontal">
                        <li class="list-group-item" style={{backgroundColor:'grey',padding:'5px',color:'white',width:'250px'}}><h5>Luxury</h5>
                        <li class="list-group-item"><p>
                            <li>A/C</li>
                            <li>Branded Vehicle</li>
                            <li>Children Seats</li>
                        </p></li>
                        </li>
                        <li class="list-group-item"style={{backgroundColor:'grey',padding:'5px',color:'white',width:'250px'}}><h5>Semi-Luxury</h5>
                        <li class="list-group-item"><p>
                            <li>A/c</li>
                            <li>Good Service</li>
                            <li></li>
                        </p></li>
                        </li>
                        <li class="list-group-item"style={{backgroundColor:'grey',padding:'5px',color:'white',width:'250px'}}><h5>Ordinary</h5>
                        <li class="list-group-item">
                        <p>
                            <li>normal service</li>
                            <li>non A/c</li>
                            <li></li>
                        </p></li>
                        </li>
                        </ul>

                    
            <br/><br/>Package:
                        <div className ="pdetails-1">
                    <select class="form-select" aria-label="Default select example" name="pPackage"
                    value={this.state.pPackage} onChange={this.handleInputChange} required>
                        <option selected>select your package</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Semi-Luxury">Semi-Luxury</option>
                        <option value="Ordinary">Ordinary</option>
                    </select></div></th>
                </tr>
                <tr>
                <th><div className ="sbtn"><b style={{color:'transparent',width:'200px'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b>
                        <button className="btn btn-success" type="submit"
                        style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>&nbsp;Save
                        </button><b style={{color:'transparent',width:'200px'}}>aaa</b>
                        <a href="/car" className="btn btn-success" type="submit"
                        style={{marginTop:'15px'}}>
                            <i className="far fa-check-square"></i>&nbsp;Next
                        </a><b style={{color:'transparent',width:'200px'}}>aaaaaa</b>
                    </div></th>
                        
                </tr>
                </table>
            </div>  

                    </form>
                
                
                
            </div>
    )};
}