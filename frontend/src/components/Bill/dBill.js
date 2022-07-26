import React, {Component} from "react";
import axios from "axios";
export default class dBill extends Component{

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
                <div>
                            {this.state.posts.slice(-1).map((posts) =>(
                            <li className="list-group-item">
                                <div><b>Driver Charges:</b></div>
                                <div style={{textAlign:'right'}}>RS.{posts.dCharges}/=</div>
                            </li>))}  
                </div>
              )}
}
