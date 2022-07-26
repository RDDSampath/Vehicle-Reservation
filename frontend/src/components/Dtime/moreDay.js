import React, {Component} from "react"
import axios from "axios"
export default class moreDay extends Component{
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


                   <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="k.sumana" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>k.sumana&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="more Days" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>more Days&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="19000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required/>LKR. 19000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0004" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0004&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="A.P.Lasa" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>A.P.Lasa&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="more Days" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>more Days&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="16000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required/>LKR. 16000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0022" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0022&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="S.E.Saman" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>S.E.Saman&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="more Days" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>more Days&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required/>LKR. 20000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0031" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0031&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="C.H.Anura" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>C.H.Anura&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="more Days" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>more Days&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="18000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required/>LKR. 18000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0006" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0006&nbsp; &nbsp; &nbsp;
                    <button type="form-check-input" class="btn btn-primary"style={{float:'Right',backgroundColor:'green'}}
                    onClick={this.onSubmit}>Select</button>
                    </form>
                    </div>
                    <div className="list-group-item"style={{backgroundColor:'#F6F08F'}}>
                    <form>
                    <img style={{width:'60px',height:'60px'}} src={process.env.PUBLIC_URL+"p1.png"} />
                    <input class="form-check-input" type="checkbox" value="J.K.Nalin" 
                    name="dName"
                    checked={this.state.dName}  
                    onChange={this.handleChekbox} required/>J.K.Nalin&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="more Days" 
                    name="dTime"
                    checked={this.state.dTime}  
                    onChange={this.handleChekbox} required/>more Days&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="20000" 
                    name="dCharges"
                    checked={this.state.dCharges}  
                    onChange={this.handleChekbox} required/>LKR. 20000 /=&nbsp; &nbsp; &nbsp;
                    <input class="form-check-input" type="checkbox" value="D0018" 
                    name="dId"
                    checked={this.state.dId}  
                    onChange={this.handleChekbox} required/>D0018&nbsp; &nbsp; &nbsp;
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