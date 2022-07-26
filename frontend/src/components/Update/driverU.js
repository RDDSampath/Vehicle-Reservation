import React, {Component} from "react";
import axios from "axios";
export default class driverU extends Component{
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
        onDelete=(id)=>{
            axios.delete(`http://localhost:8500/driver/delete/${id}`).then((res)=>{
              alert('Data successfully Deleted!');
              this.retrievePosts();
            })
          }    
    render() {
        return(
            <div className="box">
                <img  src={process.env.PUBLIC_URL+"driver.png"}/>
                <h2>Delete Driver and Set Again</h2>
                {this.state.posts.slice(-1).map((posts) =>(<div>
                            <li className="list-group-item">
                                <div><b>Driver Name:</b></div>
                                <div style={{textAlign:'right'}}>
                                    <a href={`/driver${posts._id}`}style={{textDecoration:'none'}}>{posts.dName}</a></div>
                                <div><b>Driver ID:</b></div>
                                <div style={{textAlign:'right'}}>{posts.dId}</div>
                                <div><b>Driver Drive time:</b></div>
                                <div style={{textAlign:'right'}}>{posts.dTime}</div>
                                <div><b>Driver Charges:</b></div>
                                <div style={{textAlign:'right'}}>RS.{posts.dCharges}/=</div>

                            </li><br/><center>
                            <a href="/car"onClick={()=>this.onDelete(posts._id)}>
                            <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                            </a> </center></div>))}


            </div>
        )
    }
}