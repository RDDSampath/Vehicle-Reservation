import React from "react";

export const Vehicle = ({formData, setForm, navigation})=>{
    const{vType}= formData;
    return(
        <div>
            <table className ="table1">
                    <tr>
                    <th>
            
            <div className ="pdetails-1">
                <br/>Vehicle Type:<br/>
                    <select class="form-select" aria-label="Default select example" 
                    name="vType"
                    value={vType}
                    onChange={setForm} 
                    >
                        <option selected>select your Vehicle</option>
                        <option value="car">car</option>
                        <option value="van">van</option>
                        <option value="Bus">Bus</option>
                    </select></div>

                    <div className ="sbtn">
                        <button className="btn btn-success"
                        style={{marginTop:'15px'}} 
                        onClick={() => navigation.next()}>
                        <i className="far fa-check-square"></i>Next
                        </button>
                    </div>
                    <div className ="sbtn">
                        <button className="btn btn-success"
                        style={{marginTop:'15px'}} 
                        onClick={() => navigation.previous()}>
                        <i className="far fa-check-square"></i>Back
                        </button>
                    </div>
                    </th>
                    </tr>
                    </table>

        </div>
    )

}