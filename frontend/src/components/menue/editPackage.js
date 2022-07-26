import React, { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {useParams,} from "react-router-dom";
import Viewpacks from './ViewPacks';

const editPackage = () => {
  const params = useParams();
  const [packageDetails, setPackageDetails] = React.useState({});
  const [updatedPackageDetails, setUpdatedPackageDetails] = React.useState({});

  useEffect(() => {
    fetchPackage();
  }, [])

  const fetchPackage = async () => {
    const response = await fetch(`http://localhost:8500/package/${params.id}`);
    const data = await response.json();
    setPackageDetails(data.package);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPackageDetails({ ...updatedPackageDetails, [name]: value });
  }

  const updatePackage = (e) => {
    e.preventDefault();
    console.log(updatedPackageDetails);
    axios.put(`http://localhost:8500/package/update/${params.id}`, updatedPackageDetails).then((res) => {
      if (res.data.success) {
        alert("package update succesfully");
        this.retrivePackages();
      }
    })
  }


  return (
    <div className="container">

        <ul className="navbar-nav">
          <li className="nav-item">
             <Link to="/allPackages">
                        <button type="button" className="w-20 btn-lg btn-outline-primary" style={{textDecoration:'none', float: "right", margin:"0px 10px 10px 10px" }}><i className="fa fa-wpforms"></i>  View Packages </button>
                    </Link>
                    </li>
        </ul>



      <form className="needs-validation" noValidate>

      When Date:?<br/>
      <input type="date" className ="form-select" id="whendate" name="pDate" 
      defaultValue={packageDetails.pDate} onChange={handleInputChange} required/>
            
            <br/><br/>
    <div className ="pdetails-1">


        <br/>
    Destination:<br/>
            <select class="form-select" aria-label="Default select example" name="pDestination"
            defaultValue={packageDetails.pDestination}
            onChange={handleInputChange}required>
                <option selected>select destination</option>
                <option value="Colombo">Colombo</option>
                <option value="Dehiwala-Mount Lavinia">Dehiwala-Mount Lavinia</option>
                <option value="Moratuwa">Moratuwa</option>
                <option value="Sri Jayawardenepura Kotte">Sri Jayawardenepura Kotte</option>
                <option value="Negombo"> Negombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Kalmunai">Kalmunai</option>
                <option value="Vavuniya"> Vavuniya</option>
                <option value="Galle"> Galle</option>
                <option value="Trincomalee"> Trincomalee</option>
                <option value="Batticaloa"> Batticaloa</option>
                <option value="Jaffna "> Jaffna</option>
                <option value="Katunayake"> Katunayake</option>
                <option value="Dambulla"> Dambulla</option>
                <option value="Kolonnawa"> Kolonnawa</option>
                <option value="Ratnapura "> Ratnapura</option>
                <option value="Matara ">Matara </option>
                <option value="Hambantota">Hambantota </option>
            </select></div><br/>

            <div className ="pdetails-1">
                    <select class="form-select" aria-label="Default select example" name="pPackage"
                    defaultValue={packageDetails.pPackage}
                    onChange={handleInputChange}required>
                        <option selected>select your package</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Semi-Luxury">Semi-Luxury</option>
                        <option value="Ordinary">Ordinary</option>
                    </select></div>

        
        <button type="submit" class="btn btn-success" style={{ marginTop: '16px' }}   onClick={updatePackage}> <i className="far fa-check-square"></i>  &nbsp;update  </button>
        
      </form>
    </div>
  );
}

export default editPackage;