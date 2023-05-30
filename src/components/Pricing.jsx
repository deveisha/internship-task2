import { Box, Typography } from '@mui/material'
import React from 'react';
import price1 from '../images/price1.svg';
import price3 from '../images/price3.svg';
import price2 from '../images/price2.svg'

const Pricing = () => {
  return (
    <>
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        marginTop:'6%'

    }}>
        <Box sx={{height:'100%', minHeight:'800px',width:{xl:'90%',xs:'100%',md:'100%',sm:'100%'},backgroundColor:'#F8FBFE'}}>
        <Typography sx={{marginTop:'2%',color:'#FF4495'}} variant='h6'>PRICING PLAN</Typography>
        <Typography sx={{fontFamily: "Nunito sans-serif",color: '#192839',fomtWeight:'500'}} variant='h4'>Choose your best pricing plan</Typography>
       <div style={{display:'flex',justifyContent:'center'}}>
        <ul class="nav nav-tabs mt-2 d-flex flex-wrap justify-content-center " id="myTab" role="tablist" style={{border:'2px solid black',borderRadius:'24px',width:'14%'}}>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Monthly</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Yearly</button>
  </li>
</ul>

</div>
<div  class="tab-content mt-4" id="myTabContent">
   <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
 <div style={{justifyContent:'space-around'}} className='container d-flex flex-wrap justify-content-space-around'>
  <div class="card d-flex justify-content-center" style={{width: '23rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'350px',textAlign:'center',verticalAlign:'center'}} src={price1} class="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} class="btn">Get started</a>
  </div>
  </div>
  <div class="card d-flex flex-wrap justify-content-center" style={{width: '25rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'360px',textAlign:'center',verticalAlign:'center'}} src={price1} class="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} class="btn">Get started</a>
  </div>
  </div>
  <div class="card d-flex flex-wrap justify-content-center" style={{width: '25rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'360px',textAlign:'center',verticalAlign:'center'}} src={price3} class="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} className="btn">Get started</a>
  </div>
  </div>
</div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div style={{justifyContent:'space-around'}} className='container d-flex flex-wrap justify-content-space-around'>
  <div class="card d-flex flex-wrap justify-content-center" style={{width: '25rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'360px',textAlign:'center',verticalAlign:'center'}} src={price1} className="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} className="btn">Get started</a>
  </div>
  </div>
  <div class="card d-flex  flex-wrap justify-content-center" style={{width: '25rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'360px',textAlign:'center',verticalAlign:'center'}} src={price2} class="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} className="btn">Get started</a>
  </div>
  </div>
    <div class="card d-flex flex-wrap justify-content-center" style={{width: '25rem',height:'30rem',color:'black',}}>
  <img style={{height:'100px',width:'360px',textAlign:'center',verticalAlign:'center'}} src={price3} className="card-img-top" alt="..."/>
  <p style={{color:'#FF4495'}}>basic</p>
  <div class="card-body">
    <h5 class="card-title">$ 05.00</h5>
    <p class="card-text" style={{fontWeight:'300',fontSize:'18px'}}>Increase traffic 50% <br />
Social Media Marketing <br />
10 Free Optimization <br />
24/7 support</p>
    <a href="#" style={{borderRadius:'44px',backgroundColor:'#FF4495',padding:"10px",width:'50%'}} className="btn">Get started</a>
  </div>
  </div>
  </div>
  </div>
</div>


        </Box>
    </Box>
    </>
  )
}

export default Pricing
