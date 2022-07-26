import React, {Component} from "react"
import axios from "axios";
export default class cabType extends Component{
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


                    <div className="list-group-item" style={{backgroundColor:'#5b5757de',color:'white'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"cab1.gif"} />
                    <input class="form-check-input" type="checkbox" value="Toyota-Access" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Toyota-Access&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="25000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 25000/= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="YG6532" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>YG6532&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />5 seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#5b5757de',color:'white'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"cab1.gif"} />
                    <input class="form-check-input" type="checkbox" value="Nissan-King" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Nissan-King&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="26000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 26000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="RG6895" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>RG6895&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />5 seats,A/C&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#5b5757de',color:'white'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"cab1.gif"} />
                    <input class="form-check-input" type="checkbox" value="Ram-Quad" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Ram-Quad&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="25000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 6000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ACD1204" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ACD1204&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="4 seats,A/C,Hybrid" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />4 seats,A/C,Hybrid&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#5b5757de',color:'white'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"cab1.gif"} />
                    <input class="form-check-input" type="checkbox" value="GMC-Double" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>GMC-Double&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="30000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 30000 /= per Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="ZX2054" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>ZX2054&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="2 seats,A/c" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />2 seats,A/c&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#5b5757de',color:'white'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"cab1.gif"} />
                    <input class="form-check-input" type="checkbox" value="Chevrolet-Double" 
                    name="vType"
                    checked={this.state.vType}  
                    onChange={this.handleChekbox} required/>Chevrolet-Double&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="28000" 
                    name="vCharges"
                    checked={this.state.vCharges}  
                    onChange={this.handleChekbox} required/>LKR. 28000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="SY6598" 
                    name="vNumber"
                    checked={this.state.vNumber}  
                    onChange={this.handleChekbox} required/>SY6598&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="3 seats,A/C" 
                    name="vCondition"
                    checked={this.state.vCondition}  
                    onChange={this.handleChekbox} required />3 seats,A/C&nbsp; &nbsp; &nbsp;
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