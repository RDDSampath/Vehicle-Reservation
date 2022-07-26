import React, {Component} from "react"
import axios from "axios"
export default class oneDay extends Component{
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

                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="J.K.Almeda"
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>J.K.Almeda&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="One Day"
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>One Day &nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="7000"
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 7000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0002"
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0002&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="D.C.Ruwan"
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>D.C.Ruwan&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="One Day"
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>One Day &nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="10000"
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 10000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0020"
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0010&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="D.V.Upul"
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>D.V.Upul&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="One Day"
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>One Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="9000"
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 9000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0009"
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0009&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="I.L.Akbal"
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>I.L.Akbal&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="One Day"
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>One Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="10000"
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 10000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0020"
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0020&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#A0F68F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="D.C.Kamal"
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>D.C.Kamal&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="One Day"
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>One Day&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="8500"
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required />LKR. 8500 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0015"
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0015&nbsp; &nbsp; &nbsp;
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
            )
    }
}