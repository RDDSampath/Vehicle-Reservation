import React, {Component} from "react"
import axios from "axios";
export default class vanType extends Component{
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


                    <div className="list-group-item" style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"van.png"} />
                    <input class="form-check-input" type="checkbox" value="Toyota Hiace" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Toyota Hiace&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 15000/= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ABA1256" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ABA1256&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="4 seats,A/C,Hybrid" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />12seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"van.png"} />
                    <input class="form-check-input" type="checkbox" value="Nissan Serena" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Nissan Serena&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="15000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 15000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="QK6589" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>QK6589&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="12 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />12seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"van.png"} />
                    <input class="form-check-input" type="checkbox" value="Toyota TownAce" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Toyota TownAce&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="15000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 15000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ACD1204" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ACD1204&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="10 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />10 seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"van.png"} />
                    <input class="form-check-input" type="checkbox" value="Mazda Bongo" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Mazda Bongo&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="18000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 18000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ZX2054" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ZX2054&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="12 seats,A/c" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />12 seats,A/c&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"van.png"} />
                    <input class="form-check-input" type="checkbox" value="Toyota Hiace" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Toyota Hiace&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 20000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="SY6598" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>SY6598&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />20 seats,A/C&nbsp; &nbsp; &nbsp;
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