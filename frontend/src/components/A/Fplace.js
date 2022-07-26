import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class Fplace extends Component{
    

render(){
  const settings = {
    dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 8,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 20000,
      cssEase: "linear"
  };
return(
  <center><div style={{width:'1000px',backgroundColor:''}} >
      <h3 style={{backgroundColor:'transparent',color:'black', fontFamily:'fantasy',padding:'2px',width:'400px'}}> Most populer place</h3>
        <Slider {...settings}>
          <div >
          
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s1.jpg"}/>
          </div>
          <div >
            <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s2.jpg"}/>
            
          </div>
          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s3.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s4.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s5.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s6.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s7.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s8.jpg"}/>
          </div>

          <div >
            <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s9.jpg"}/>
            
          </div>
          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s10.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s11.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s12.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s13.jpg"}/>
          </div>

          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s14.jpg"}/>
          </div>
          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s15.jpg"}/>
          </div>
          <div >
          <img style={{width:'100px', height:'100px',borderRadius:'50px',border:'3px solid black'}} src={process.env.PUBLIC_URL+"s16.jpg"}/>
          </div>

        </Slider>
        
    </div></center>
    )
  }
}

