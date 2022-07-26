import React, {Component} from "react";
export default class setU extends Component{


    render() {


        return(
            <div className="box" style={{height:'450px',width:'400px'}}><h1>Select You want Edit </h1>
            <br/><br/><center>
            <img  src={process.env.PUBLIC_URL+"package.png"}/>
            <a style={{margin:'10px'}} href="/pu" className="btn btn-danger">Package EDIT DELETE</a>

            <br/>
            <img  src={process.env.PUBLIC_URL+"driver.png"}/>

            <a style={{margin:'10px'}} href="/dU" className="btn btn-warning">Driver EDIT DELETE</a>

            <br/>
            <img  src={process.env.PUBLIC_URL+"vehicle.png"}/>

            
           <a style={{margin:'10px'}} href="/vU" className="btn btn-success">Vehicle EDIT DELETE</a>
           </center>

            


            </div>
        )
    }
}