import React from "react";

export default function Carousel (){
    return(<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={process.env.PUBLIC_URL+"header.png"} class="d-block w-100" style={{}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 style={{color:'yellow'}}><b>HOTELS, RESORTS, HOSTELS & MORE</b></h1>
        <p><b>Grand Plaza of Accommodations</b></p>
      </div>
    </div>
    </div>
</div>)}