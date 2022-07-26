import React, {Component} from "react";
import axios from "axios";
import Driver from './drive';
import Vehicle from "./vehicle";
export default class Package extends Component{
    constructor(props){
        super(props);
        this.state={posts:[]
        };
      }
    
    componentDidMount(){
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
      filterData(packages,searchKey){
        const result = packages.filter((packages)=>
         packages.pDate.toLowerCase().includes(searchKey)||
         packages.pDestination.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})
        }
        handleSearchArea = (e) =>{
            const searchKey= e.currentTarget.value;
            axios.get("http://localhost:8500/package").then(res =>{
                if(res.data.success){
                  this.filterData(res.data.existingPosts,searchKey)
                }  
            });

        }

render(){
return(
  <div>
    <center><div className="list-group-item" style={{width:'1000px',backgroundColor:'#BAE0F7'}}>
    
      <center><h3>ADMIN Dashboard</h3></center>
      <p>PACKAGE ADMIN</p>
      <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
              
          </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">DATE</th>
            <th scope="col">Destination</th>
            <th scope="col">Package</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index) =>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/package${posts._id}`}style={{textDecoration:'none'}}>
                {posts.pDate}</a>
                </td>
              <td>{posts.pDestination}</td>
              <td>{posts.pPackage}</td>
              <td>
                <a className="btn btn" href=""onClick={()=>this.onDelete(posts._id)}>
                <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                  </a>
              </td>
            </tr>
          ))}
        </tbody>
        </table>

        <Vehicle {...Vehicle}/>

    <Driver {...Driver}/>
    </div></center>
    </div>
    )
  }
}
