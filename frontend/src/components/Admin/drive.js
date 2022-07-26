import React, {Component} from "react";
import axios from "axios";
export default class driver extends Component{
    constructor(props){
        super(props);
        this.state={posts:[]
        };
      }
    
    componentDidMount(){
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
      filterData(Drivers,searchKey){
        const result = Drivers.filter((Drivers)=>
         Drivers.dCharges.toLowerCase().includes(searchKey)||
         Drivers.dTime.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})
        }
        handleSearchArea = (e) =>{
            const searchKey= e.currentTarget.value;
            axios.get("http://localhost:8500/driver").then(res =>{
                if(res.data.success){
                  this.filterData(res.data.existingPosts,searchKey)
                }  
            });

        }

render(){
return(
    <div >
      <p>DRIVER ADMIN </p>
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
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Drive Time</th>
            <th scope="col">Charges</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index) =>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/driver${posts._id}`}style={{textDecoration:'none'}}>
                {posts.dName}</a>
                </td>
              <td>{posts.dId}</td>
              <td>{posts.dTime}</td>
              <td>{posts.dCharges}</td>
              <td>
                <a href=""onClick={()=>this.onDelete(posts._id)}>
                <i className="fa fa-trash-o" style={{fontSize:'30px',color:'red'}}></i>
                  </a>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    )
  }
}
