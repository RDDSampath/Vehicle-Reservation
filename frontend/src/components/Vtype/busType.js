import React, {Component} from "react"
import axios from "axios";
export default class busType extends Component{
    constructor(props){
        super(props);
        this.state={
            vType:"",
            vCharges:"",
            vNumber:"",
            vCondition:""
        }
    }
    handleChekbox=(e) =>{
         const {name,value} = e.target;

         this.setState({
             ...this.state,
             [name]:value
         })
    }
    

    onSubmit=(e) =>{
        e.preventDefault();

        const {vType,vCharges,vNumber,vCondition} = this.state;

        const data = {
            vType:vType,
            vCharges:vCharges,
            vNumber:vNumber,
            vCondition:vCondition
        }
        axios.post("http://localhost:8500/vehicle/add",data).then((res)=>{
            
            if(res.data.success){
                alert('Data successfully Selected!');
                this.setState(
                    {
                        vType:"",
                        vCharges:"",
                        vNumber:"",
                        vCondition:""
                    }
                )
            }
        })
        
    }


    render() {
        return(
                <div className="box" style={{width:'900px'}}>
                    <h1 className="h3 mb-3 font-weight-normal">Vehicle</h1>

                        Vehicle Type:?<br/>

                        <a href="/car" type="button" class="btn btn-primary">Car</a>&nbsp;
                        <a href="/cab" type="button" class="btn btn-dark">Cab</a>&nbsp;
                        <a href="/van" type="button" class="btn btn-success">Van</a>&nbsp;
                        <a href="/tuk" type="button" class="btn btn-danger">Threewheel</a>&nbsp;
                        <a href="/bus" type="button" class="btn btn-warning">Bus</a>&nbsp;

                    
                    <div className="list-group-item" style={{backgroundColor:'#F6F08F'}}>
                    <li><form className="1">
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"bus.gif"} />
                    <input class="form-check-input" type="checkbox" value="Laylend" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Laylend&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 20000/= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="YZ1256" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>YZ1256&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="26 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />26 seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select &nbsp; &#9989;</button>
                    </form></li>
                    </div>
                    


                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form className="2">
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"bus.gif"} />
                    <input class="form-check-input" type="checkbox" value="TATA" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>TATA&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="18000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 18000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="SY6598" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>SY6598&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="24 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />24 seats,Non A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select &nbsp; &#9989;</button>
                    </form>
                    </div>

                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form className="3">
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"bus.gif"} />
                    <input class="form-check-input" type="checkbox" value="TATA" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>TATA&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="16000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 16000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ZT6234" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ZT6234&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20 seats,Non A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />20 seats, Non A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select &nbsp;&#9989;</button>
                    </form>
                    </div>


                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form className="4">
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"bus.gif"} />
                    <input class="form-check-input" type="checkbox" value="Laylend" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Laylend&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="22000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 22000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="YU6523" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>YU6523&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="30 seats,A/c" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />30 seats,A/c&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select &nbsp;&#9989;</button>
                    </form>
                    </div>


                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form className="5">
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"bus.gif"} />
                    <input class="form-check-input" type="checkbox" value="Laylend" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Laylend&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="19000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 19000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ZX1203" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ZX1203&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="24 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />24 seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary" style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select &nbsp; &#9989;</button>
                    </form>
                    </div>


                    <div className ="sbtn"><b style={{color:'transparent',width:'200px'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b>
                        <a className="btn btn-success" href="/Vehicle"
                        style={{marginTop:'15px'}} >
                            <i className="far fa-check-square"></i>&nbsp;Back
                        </a><b style={{color:'transparent',width:'200px'}}>aaa</b>
                        <a href="/hday" className="btn btn-success" type="submit"
                        style={{marginTop:'15px'}}>
                            <i className="far fa-check-square"></i>&nbsp;Next
                        </a><b style={{color:'transparent',width:'200px'}}>aaaaaa</b>
                    </div>

                     
                </div>           
)}};