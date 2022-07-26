import React from "react";
import { Accordion, Container } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { ListItemText } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import axios from "axios";


export const Confirm = ({setForm,formData, navigation})=>{
const {go} = navigation;

    const{pDate, pDestination, pPackage, vType, dTime} = formData;



    function sendData(e){
        e.preventDefault();
        alert("insert");

        const newPackage = setForm;
        axios.post("http://localhost:9000/package/add ", newPackage).then(() =>{
            alert("package selected ")
        }).catch((err) => {
            alert(err)
        })
    }
    
    
    console.log(sendData)
    return(
        <Container>
            
            <RenderAccordion summary ="Package" go={ go } details={[
                {'when Date ?':pDate},
                {'Destination':pDestination},
                {'Package':pPackage},
            ]}/>
            <RenderAccordion summary ="Vehicle" go={ go } details={[
                {'Vehicle Type':vType},
            ]}/>
            <RenderAccordion summary ="Driver" go={ go } details={[
                {' Driver drive time':dTime},
            ]}/>

            <Button
            color="primary"
            variant="contained"
            style={{marginTop:'1.5rem'}}
            onSubmit={(e)=>sendData}
            
            >Confirm</Button>

        </Container>
    );

};
export const RenderAccordion =({summary, details, go}) =>(
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMore/>}
        >{summary}</AccordionSummary>
        <AccordionDetails>
            <div >
                {details.map((data,index)=>{
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];
                    return <ListItemText key={index}>{`${objKey}:${objValue}`}</ListItemText>
                })}
                <IconButton
                color="primary"
                component="span"
                onClick={() => go(`${summary.toLowerCase()}`)}
                ><EditIcon /></IconButton>
            </div>
        </AccordionDetails>

    </Accordion>
)
