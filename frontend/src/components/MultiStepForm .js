import React from "react";
import{ useForm, useStep } from "react-hooks-helper";
import {Package} from "./stepForm/Package";
import {Vehicle} from "./stepForm/Vehicle";
import {Driver} from "./stepForm/Driver";
import {Confirm} from "./stepForm/Confirm";
import {Bill} from "./stepForm/Bill";

const defaultData ={
    pDate:"",
    pDestination:"",
    pPackage:"",
    vType:"",
    dTime:""
};
const steps =[
    {id:'package'},
    {id:'vehicle'},
    {id:'driver'},
    {id:'confirm'},
    {id:'bill'},
]
export const MultiStepForm = () =>{
    const [formData,setForm] = useForm(defaultData);
    const{step,navigation} = useStep({
        steps,
        initialStep:0
    });
const props = {formData,setForm,navigation}

    switch(step.id){
        case 'package':
            return<Package{...props}/>
        case 'vehicle':
            return<Vehicle{...props}/>
        case 'driver':
            return<Driver{...props}/>
        case 'confirm':
            return<Confirm{...props}/>
        case 'bill':
            return<Bill{...props}/>
    }
    
    return(
        <div>
            
        <h1>multi task</h1>
        </div>
    );
}


function CreateData(){
    return(
        <div>

            </div>
    )
}
