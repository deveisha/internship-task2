import React from 'react'
import footer from '../images/footer.jpg'
import logo from '../images/logo.png.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Footer = () => {
  return (
    <div>

 
<footer class="text-center text-lg-start bg-white text-muted" style={{backgroundImage: `url(${footer})`,backgroundSize:'cover'}}>
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    
   
  </section>
 
  <section class="">
    <div class="container text-center text-md-start  mt-5">
     
      <div class="row mt-3">
       
        <div class="col-md-6 col-lg-4 col-xl-3 sm-8  mx-auto mb-4">
          
          <h6 class="text-dark fw-bold mb-4 xs float-start">
            <img src={logo} alt="" />
          </h6>
          <p class="text-dark mb-4 xs float-start">
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className='mt-5 xs-mt-2'>
          <FacebookIcon/>
          <InstagramIcon/>
          <LinkedInIcon/>
          <YouTubeIcon/>
          </div>
        </div>
    
        <div class="col-md-2 col-lg-2 col-xl-2 xs-3 mx-auto  mb-4 ">
       
          <h6 class="text-dark fw-bold mb-4">
            Navigation
          </h6>
          <p>
            <a href="#!" class="text-dark">Home</a>
          </p>
          <p>
            <a href="#!" class="text-dark">About </a>
          </p>
          <p>
            <a href="#!" class="text-dark">Services</a>
          </p>
          <p>
            <a href="#!" class="text-dark">Blog</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-dark fw-bold mb-4">
           Services
          </h6>
          <p>
            <a href="#!" class="text-dark">Done Mapping</a>
          </p>
          <p>
            <a href="#!" class="text-dark">Real State</a>
          </p>
          <p>
            <a href="#!" class="text-dark">Commercial</a>
          </p>
          <p>
            <a href="#!" class="text-dark">construction</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-dark fw-bold mb-4">
          Support
          </h6>
          <p>
            <a href="#!" class="text-dark">Done Mapping</a>
          </p>
          <p>
            <a href="#!" class="text-dark">Real State</a>
          </p>
          <p>
            <a href="#!" class="text-dark">Commercial</a>
          </p>
          <p>
            <a href="#!" class="text-dark">construction</a>
          </p>
        </div>
    
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-dark fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-dark"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-dark"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-dark"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3 text-dark"></i> + 01 234 567 89</p>
        </div>
       
      </div>
    
    </div>
  </section>


 
  <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
  Copyright ©2023 All rights reserved | This template is made with <FavoriteOutlinedIcon sx={{color:'#FF4496'}}/> by Colorlib
  </div> 

</footer>
    </div>

  )
}

export default Footer
