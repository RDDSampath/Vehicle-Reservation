import React, {Component} from "react"
import axios from "axios";
export default class tukType extends Component{
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
                <div className="box">
                    <h1 className="h3 mb-3 font-weight-normal">Vehicle</h1>

                        Vehicle Type:?<br/>

                        <a href="/car" type="button" class="btn btn-primary">Car</a>&nbsp;
                        <a href="/cab" type="button" class="btn btn-dark">Cab</a>&nbsp;
                        <a href="/van" type="button" class="btn btn-success">Van</a>&nbsp;
                        <a href="/tuk" type="button" class="btn btn-danger">Threewheel</a>&nbsp;
                        <a href="/bus" type="button" class="btn btn-warning">Bus</a>&nbsp;


                    <div className="list-group-item" style={{backgroundColor:'#F6AC8F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"tuk.png"} />
                    <input class="form-check-input" type="checkbox" value="Bajaj" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Bajaj&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="8000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 8000/= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ABA1256" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ABA1256&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="3 seats" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required/>3 seats&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6AC8F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"tuk.png"} />
                    <input class="form-check-input" type="checkbox" value="Piagio" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Piagio&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="10000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 10000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="QK6589" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>QK6589&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="4 seats" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required/>4 seats&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6AC8F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"tuk.png"} />
                    <input class="form-check-input" type="checkbox" value="Bajaj" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Bajaj&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="6000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 6000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ACD1204" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ACD1204&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="3 seats" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required/>3 seats&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6AC8F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"tuk.png"} />
                    <input class="form-check-input" type="checkbox" value="Piagio" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Piagio&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="7000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 7000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ZX2054" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ZX2054&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="4 seats" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required/>4 seats&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6AC8F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"tuk.png"} />
                    <input class="form-check-input" type="checkbox" value="Bajaj" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Bajaj&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="6500" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 6500 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="SY6598" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>SY6598&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="3 seats" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required/>3 seats&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary" style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
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