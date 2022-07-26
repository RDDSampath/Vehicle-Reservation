import React, {Component} from "react";
import axios from "axios";
export default class vehicleU extends Component{
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
        axios.get("http://localhost:8500/vehicle").then(res=>{
            if(res.data.success){
              this.setState({
                posts:res.data.existingPosts
              });
              console.log(this.state.posts)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`http://localhost:8500/vehicle/delete/${id}`).then((res)=>{
              alert('Data successfully Deleted!');
              this.retrievePosts();
            })
          }   


    render() {


        return(
            <div className="box">
              <img  src={process.env.PUBLIC_URL+"vehicle.png"}/>
                <h2>Delete Vehicle and Set Again</h2>
                {this.state.posts.slice(-1).map((posts) =>(<div>
                            <li className="list-group-item">
                                <div><b>Vehicle Type:</b></div>
                                <div style={{textAlign:'right'}}>{posts.vType}</div>
                                <div><b>Vehicle Charges:</b></div>
                                <div style={{textAlign:'right'}}>RS.{posts.vCharges}/=</div>
                                <div><b>Vehicle Number:</b></div>
                                <div style={{textAlign:'right'}}><a href={`/vehicle${posts._id}`}style={{textDecoration:'none'}}>{posts.vNumber}</a></div>
                                <div><b>Vehicle Condition:</b></div>
                                <div style={{textAlign:'right'}}>{posts.vCondition}</div>

                            </li><br/>
                            <center><a href="/car"onClick={()=>this.onDelete(posts._id)}>
                            <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                  </a></center></div>))}
                  


            </div>
        )
    }
}