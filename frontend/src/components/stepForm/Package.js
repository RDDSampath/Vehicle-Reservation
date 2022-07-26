import React from "react";

export const Package = ({formData, setForm, navigation})=>{
    const {pDate, pDestination, pPackage} = formData;
    return(
        <div>
            
            <table className ="table1">
                    <tr>
                    <th colspan="3">
                    When Date:?<br/>
            
            <input type="date" 
            className ="form-Date" 
            id="whendate" 
            name="pDate" 
            value={pDate}
            onChange={setForm} 
            />
            
                    <br/><br/>
            <div className ="pdetails-1">
            Destination:<br/>
                    <select class="form-select" aria-label="Default select example" 
                    name="pDestination"
                    value={pDestination} 
                    onChange={setForm}
                    >

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
                    <table border="2">
                    <tr>
                        <td> Luxury </td>
                        <td> Semi-Luxury  </td>
                        <td>Ordinary</td>
                        </tr>
                        <tr>
                        <td>details</td>
                        <td>details</td>
                        <td>details</td>
                        </tr>
                        <tr>
                        <td>details</td>
                        <td>details</td>
                        <td>details</td>
                        </tr>
                        
                        </table>
            <br/><br/>
                        <div className ="pdetails-1">
                    <select class="form-select" aria-label="Default select example" 
                    name="pPackage"
                    value={pPackage}
                    onChange={setForm} 
                    >

                        <option selected>select your package</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Semi-Luxury">Semi-Luxury</option>
                        <option value="Ordinary">Ordinary</option>
                    </select></div></th>
                </tr>
                <tr>
                <th><div className ="sbtn">
                        <button className="btn btn-success"
                        style={{marginTop:'15px'}} 
                        onClick={() => navigation.next()}>
                        <i className="far fa-check-square"></i>Next
                        </button>
                    </div>
                    </th>
                        
                </tr>
                </table>
        </div>
    );

};