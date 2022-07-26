import React, {Component} from "react";
export default class Menue extends Component{

  
    render(){
    return(
        <div><br/>
            <nav aria-label="Page navigation example"><center>
  <ul class="pagination" style={{width:'fit-content', margin:'auto'}}>
    <li class="page-item"><a class="page-link"style={{width:'70px',height:'70px',borderRadius:'35px'}} href="/create"><img  src={process.env.PUBLIC_URL+"package.png"}/></a></li>
    <li class="page-link" style={{backgroundColor:'transparent',border:'transparent'}}> </li>
    <li class="page-item"><a class="page-link"style={{width:'70px',height:'70px',borderRadius:'35px'}} href="/car"><img  src={process.env.PUBLIC_URL+"vehicle.png"}/></a></li>
    <li class="page-link" style={{backgroundColor:'transparent',border:'transparent'}}> </li>
    <li class="page-item"><a class="page-link"style={{width:'70px',height:'70px',borderRadius:'35px'}} href="/hday"><img  src={process.env.PUBLIC_URL+"driver.png"}/></a></li>
    <li class="page-link" style={{backgroundColor:'transparent',border:'transparent'}}> </li>
    <li class="page-item"><a class="page-link"style={{width:'70px',height:'70px',borderRadius:'35px'}} href="/bill"><img  src={process.env.PUBLIC_URL+"bill.png"}/></a></li>
  </ul></center>
</nav>   
        </div>
    )}};
