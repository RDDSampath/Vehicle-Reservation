import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Offer extends Component{

  
render(){
  const settings = {
    dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 20000,
      cssEase: "linear"
  };
return(
  <center><div style={{width:'500px'}}>
      <h2 style={{backgroundColor:'transparent',color:'black', fontFamily:'fantasy',padding:'2px',width:'400px'}}> Offers</h2>
        <Slider {...settings}>
          <div >
            <img className ="offerimage" src={process.env.PUBLIC_URL+"offer1.png"}/>
            
          </div>
          <div >
            <img className ="offerimage" src={process.env.PUBLIC_URL+"offer2.png"}/>
            
          </div>
          <div >
            <img className ="offerimage" src={process.env.PUBLIC_URL+"offer3.png"}/>
          </div>

        </Slider>
        
    </div></center>
    )
  }
}

