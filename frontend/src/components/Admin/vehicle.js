import React, {Component} from "react";
import axios from "axios";
export default class vehicle extends Component{
    constructor(props){
        super(props);
        this.state={posts:[]
        };
      }
    
    componentDidMount(){
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
      filterData(Vehicles,searchKey){
        const result = Vehicles.filter((Vehicles)=>
         Vehicles.vCharges.toLowerCase().includes(searchKey)||
         Vehicles.vType.toLowerCase().includes(searchKey)
        )
        this.setState({posts:result})
        }
        handleSearchArea = (e) =>{
            const searchKey= e.currentTarget.value;
            axios.get("http://localhost:8500/vehicle").then(res =>{
                if(res.data.success){
                  this.filterData(res.data.existingPosts,searchKey)
                }  
            });

        }

render(){
return(
    <div>
      <p>VEHICLE ADMIN </p>
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
            <th scope="col">Type</th>
            <th scope="col">Charges</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index) =>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/vehicle${posts._id}`}style={{textDecoration:'none'}}>
                {posts.vType}</a>
                </td>
              <td>{posts.vCharges}</td>
              <td>{posts.vNumber}</td>
              <td>{posts.vCondition}</td>
              <td>
              
                <a  href=""onClick={()=>this.onDelete(posts._id)}>
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
