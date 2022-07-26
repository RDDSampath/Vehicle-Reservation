import React, { Component } from 'react'
import axios from 'axios'
export default class updatePackage extends Component{

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
        const id = this.props.match.parms.id;

        const {pDate,pDestination,pPackage} = this.state;

        const data = {
            pDate:pDate,
            pDestination:pDestination,
            pPackage:pPackage
        }
        console.log(data)

        axios.put(`http://localhost:8500/package/update/${id}`,data).then((res)=>{           
            if(res.data.success){
                alert("update successfully")
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
     componenetDidMount(){
         const id = this.props.match.parms.id;

         axios.get(`http://localhost:8500/package/${id}`).then((res) => {
             if(res.data.success){
                 this.setState({
                     pDate:res.data.posts.pDate,
                     pDestination:res.data.posts.pDestination,
                     pPackage:res.data.posts.pPackage
                 });
                 console.log(this.state.post);
             }
         });
        }

    render(){
        return(
                <div className="box">
                    <h1 className="h3 mb-3 font-weight-normal">Package</h1>
                    <form className="needs-validation" noValidate>

                      <div className ="container" >
           
            
            <table className ="table1">
                    <tr>
                    <th>
                    When Date:?<br/>
            
            <input type="date" className ="form-select"
            name="pDate" 
            value={this.state.pDate} 
            onChange={this.handleInputChange} required/>
            
                    <br/><br/>
            <div className ="pdetails-1">
            Destination:<br/>
                    <select class="form-select" aria-label="Default select example" 
                    name="pDestination"
                    value={this.state.pDestination} 
                    onChange={this.handleInputChange}required>

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
            <br/><br/>
                        <div className ="pdetails-1">
                    <select class="form-select" aria-label="Default select example" 
                    name="pPackage"
                    value={this.state.pPackage} 
                    onChange={this.handleInputChange}required>
                        
                        <option selected>select your package</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Semi-Luxury">Semi-Luxury</option>
                        <option value="Ordinary">Ordinary</option>
                    </select></div></th>
                </tr>
                <tr>
                <th><div className ="sbtn">
                        <button className="btn btn-success" type="submit"
                        style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>&nbsp;Update
                        </button>
                    </div></th>       
                </tr>
                </table>
            </div>  
        </form>   
    </div>
    )
};
}