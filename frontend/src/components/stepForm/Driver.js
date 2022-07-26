import React from "react";

export const Driver = ({formData, setForm, navigation})=>{
    const{dTime}= formData;
    return(
        <div>
            <table className ="table1">
                    <tr>
                    <th>
            <h1>Driver</h1>
            <div className ="pdetails-1">
                <br/>Driver Time:<br/>
                    <select class="form-select" aria-label="Default select example" 
                    name="dTime"
                    value={dTime}
                    onChange={setForm} 
                    >
                        <option selected>select Trip time</option>
                        <option value="6">6 Hour</option>
                        <option value="12">12 Hour</option>
                        <option value="24">1 Day</option>
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