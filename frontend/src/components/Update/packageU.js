import React, {Component} from "react";
import axios from "axios";
export default class packageU extends Component{
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
        axios.get("http://localhost:8500/package").then(res=>{
            if(res.data.success){
              this.setState({
                posts:res.data.existingPosts
              });
              console.log(this.state.posts)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`http://localhost:8500/package/delete/${id}`).then((res)=>{
              alert('Data successfully Deleted!');
              this.retrievePosts();
            })
          }   


    render() {


        return(
            <div className="box">
              <img  src={process.env.PUBLIC_URL+"package.png"}/>
                <h2>Delete Package and Set Again</h2>
                {this.state.posts.slice(-1).map((posts) =>(<div>
                            <li className="list-group-item">
                                <div><b>Package :</b></div>
                                <div style={{textAlign:'right'}}>{posts.pPackage}</div>
                                <div><b>Package Date :</b></div>
                                <div style={{textAlign:'right'}}><a href={`/vehicle${posts._id}`}style={{textDecoration:'none'}}>{posts.pDate}</a></div>
                                <div><b>Package Destination:</b></div>
                                <div style={{textAlign:'right'}}>{posts.pDestination}</div>

                            </li><br/>
                            <a className="btn btn-danger" href={`/update/${posts._id}`}>
                  <i className="fas fa-edit"></i>&#128221;Edit
                  </a>
                            <center><a  href=""onClick={()=>this.onDelete(posts._id)}>
                            <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                  </a></center></div>))}

            </div>
        )
    }
}