import React from 'react';
import bg2 from '../images/bg2.png';
import { Box } from '@mui/material';
import hero from '../images/hero.jpg'
const Herosec = () => {
  return (
    <div style={{
        marginTop:'6%',
        backgroundImage:`url(${hero})` ,  
        backgroundRepeat:'no-repeat',
        backgroundClip:'cover',
        height:'70vh',
        width:"100vw",
        backgroundSize: 'cover',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    }}>
      <Box sx={{height:{xl:'505px',xs:'360px',sm:'450px',md:'390px'},width:{xl:'490px',sm:'300px',md:'330px',xs:'290px'}, color:'white',backgroundImage:`url(${bg2})`,backgroundRepeat:'no-repeat',padding: {xl:'65px 50px 65px 60px',md:'55px 40px 55px 50px',xs:'55px 40px 55px 50px'},marginTop:{xl:'3%',md:'1%',sm:'18%',xs:'0%'},position:'absolute',right:{xl:'120px',sm:'22px',md:'23px',xs:'4px'}}}> 
      <div style={{position:'relative',right:'3%'}}>
      <h5 style={{fontFamily: "Nunito,sans-serif",fontWeight:'700',display:'block'}} >Interested to <br /> Digging Dipper?</h5>
<p style={{fontFamily: "Nunito,sans-serif",fontWeight:'700'}}>We’re out to create purposeful spaces <br /> that balance art and creativity with science and strategy.</p>
<a className='border-btn loan btn' href="#" class="border-btn loan-btn">Contact Us</a>
</div>
      </Box>



    </div>
  )
}

export default Herosec

