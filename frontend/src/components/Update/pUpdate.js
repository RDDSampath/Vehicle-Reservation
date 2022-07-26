import React, {Component} from "react"
import axios from "axios";
export default class pUpdate extends Component{

    constructor(props){
        super(props);
        this.state={
            pDate :"",
            pDestination :"",
            pPackage :""
        }
    }
    handleInputChange=(e) =>{
         const {name,value} = e.target;

         this.setState({
             ...this.state,
             [name]:value
         })
    }

    onSubmit=(e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const {pDate,pDestination,pPackage} = this.state;

        const data = {
            pDate:pDate,
            pDestination:pDestination,
            pPackage:pPackage
        }
        console.log(data)

        axios.put(`http://localhost:8500/package/update/${id}`,data).then((res)=>{
            
            if(res.data.success){
                alert('Data successfully updated!');
                this.setState(
                    {
                        pDate:"",
                        pDestination:"",
                        pPackage:""
                    }
                )
            }
        })
        
    }
    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8500/package/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    pDate:res.data.package.pDate,
                    pDestination:res.data.package.pDestination,
                    pPackage:res.data.package.pPackage
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return(
            <div className="col-md-8 mt-4 mx-auto">
            <center><h1 className="h3 mb-3 font-weight-normal">Update Inquiry</h1></center>
              <form className="needs-validation" noValidate>

                <div className="form-group" style={{marginBottom:'15px'}}>
                  <lable style={{marginBottom:'5px'}}>Trip Date</lable>
                  <input type="text"
                  className="form-control"
                  name="pDate"
                  placeholder="Enter Date"
                  value={this.state.pDate}
                  onChange={this.handleInputChange}/>
                </div>

                  <div className="form-group" style={{marginBottom:'15px'}}>
                  <lable style={{marginBottom:'5px'}}>Destination</lable>
                  <input type="text"
                  className="form-control"
                  name="pDestination"
                  placeholder="Enter Destination"
                  value={this.state.pDestination}
                  onChange={this.handleInputChange}/>
                  </div>

                  <div className="form-group" style={{marginBottom:'15px'}}>
                  <lable style={{marginBottom:'5px'}}>Select Package :</lable>
                  <input type="text"
                  className="form-control"
                  name="pPackage"
                  placeholder="Enter Package"
                  value={this.state.pPackage}
                  onChange={this.handleInputChange}/>
                  </div>

                  <center><button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp;Update
                  </button></center>
            
              </form>
              </div>
    )};
}