import React, {Component} from "react"
import axios from "axios";
export default class HalfDay extends Component{
    constructor(props){
        super(props);
        this.state={
            dName :"",
            dId :"",
            dTime :"",
            dCharges :""
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

        const {dName,dId,dTime,dCharges} = this.state;

        const data = {
            dName:dName,
            dId:dId,
            dTime:dTime,
            dCharges:dCharges
        }
        axios.post("http://localhost:8500/driver/add",data).then((res)=>{
            
            if(res.data.success){
                alert('Data successfully Selected!');
                this.setState(
                    {
                        dName :"",
                        dId :"",
                        dTime :"",
                        dCharges :""
                    }
                )
            }
        })
        
    }


    render() {
        return(
                <div className="box">
                    <h1 className="h3 mb-3 font-weight-normal">Driver</h1>

                        Driver Drive Time:?<br/>

                        <a href="/hday" type="button" class="btn btn-primary">Half Day</a>&nbsp;
                        <a href="/oday" type="button" class="btn btn-success">One Day</a>&nbsp;
                        <a href="/tday" type="button" class="btn btn-danger">Two Days</a>&nbsp;
                        <a href="/mday" type="button" class="btn btn-warning">More Days</a>&nbsp;


                    <div className="list-group-item" style={{backgroundColor:'#8FD1F6'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="k.sumanasiri" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>k.sumanasiri&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="half Day" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>half Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 5000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0001" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0001&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#8FD1F6'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="A.P.Lasantha" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>A.P.Lasantha&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="half Day" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>half Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="4000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 4000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0026" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0026&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#8FD1F6'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="S.E.Saman" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>S.E.Saman&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="half Date" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>half Date&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 5000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0027" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0027&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#8FD1F6'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="C.H.Anura" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>C.H.Anura&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="half Date" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>half Date&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="6000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 6000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0012" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0012&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#8FD1F6'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="J.K.Nalin" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>J.K.Nalin&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="half Date" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>half Date&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="5500" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 5500 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0025" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0025&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary" style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className ="sbtn"><b style={{color:'transparent',width:'200px'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b>
                        <a className="btn btn-success" href="/Vehicle"
                        style={{marginTop:'15px'}} >
                            <i className="far fa-check-square"></i>&nbsp;Back
                        </a><b style={{color:'transparent',width:'200px'}}>aaa</b>
                        <a href="/bill" className="btn btn-success" type="submit"
                        style={{marginTop:'15px'}}>
                            <i className="far fa-check-square"></i>&nbsp;Next
                        </a><b style={{color:'transparent',width:'200px'}}>aaaaaa</b>
                    </div>

                     
                </div>           
)}};