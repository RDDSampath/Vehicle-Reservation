import React, {Component} from "react";
import axios from "axios";
import VBill from "./vBill";
import DBill from "./dBill";
export default class bill extends Component{

    constructor (props){
        super(props);
        this.state = {
            posts:[]

        };
    } 
    
   
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        this.retrievePosts();
    }
    retrievePosts(){
        axios.get("http://localhost:8500/driver").then(res=>{
            if(res.data.success){
              this.setState({
                posts:res.data.existingPosts
              });
              console.log(this.state.posts)
            }
          })
        }
        showAlert() {
            alert("RE-DIRECT TO PAYMENT");
          }   
    render() {
        


        return(
                <div className="box">
                     
                    <h3><center>Your Bill Details</center></h3>
                   
                    <div className="card" style={{width:'500px',margin:'Auto'}}>
                        <ul className="list-group list-group-flush">
                            
                            <VBill {...VBill}/>
                            <DBill {...DBill}/>
                            <li className="list-group-item">
                                <div><b>Discount:</b></div>
                                <div style={{textAlign:'right'}}>20% discount RS.2000{this.props.discount}/=</div>
                            </li>
                            <li className="list-group-item">
                                <div><b>Bill:</b></div>
                                <div style={{textAlign:'right'}}>RS.10000/=</div>
                            </li>
                            <li className="list-group-item">
                                <div><b>Total Bill:</b></div>
                                <div style={{textAlign:'right'}}>RS.8000{this.props.pTotal}/=</div>
                            </li>
                        </ul>
                    </div>
                    
                    <b style={{color:'transparent'}}>aaaaaaaaaaaaaaaaaaaaaaa</b>
                    <a style={{margin:'10px'}} href="/su" className="btn btn-warning">Edit</a><b style={{color:'transparent'}}>aaaaaaaaa</b>
                    <button className="btn btn-success"onClick={this.showAlert}>Confirm</button>
                    
                     
                </div>
              )}
}
