
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Carousel from 'react-grid-carousel'
import CountUp from 'react-countup';
import brand1 from '../images/brand1.png.webp';
import brand2 from '../images/brand2.png.webp';
import brand3 from '../images/brand3.png.webp';
import brand4 from '../images/brand4.png.webp'

const Projects = () => {
  return (
    <>
   <Grid container>
<Grid item xs={5}>
<Typography sx={{marginTop:'8%',color:'#FF4495',fontSize:'23px'}} variant='h6'>why choose us</Typography>
</Grid>
</Grid>
<Grid container>
<Grid sx={{display:'flex',justifyContent:'center',flexWrap:'wrap'}} item xs={8}>
<Typography  sx={{fontWeight:{xl:'bold',xs:'bold'},textAlign:'justify',width:{xs:'100%',xl:'51%'},position:'relative',fontSize:{xl:'29px',xs:'19px',sm:'22px',md:'23px'}}}>We are an SEO company that specializes in developing</Typography>

</Grid>
<Grid item xs={3}> 
<Typography sx={{marginTop:'2%',color:'#FF4495',fontSize:{xl:'23px',xs:'18px'},':hover':{textDecoration:'underline',cursor:'pointer'}}} variant='h6'>Explore More</Typography>
</Grid>
<Grid xs={4}>

</Grid>
</Grid>
<hr />
<Grid container spacing={1}>
<Grid item xl={3} xs={6}>

   
    <CountUp start={0} end={450} delay={6}>
  {({ countUpRef }) => (
    <div className='container' style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
    <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 style={{fontSize:'47px',fontWeight:'bolder',color:'#FF4495'}} class="card-title" ref={countUpRef}></h5>
    <h6 class="card-subtitle mb-2 text-muted">Successfully completed projects</h6>
  </div>
</div>
</div>
  )}
</CountUp>
</Grid>
<Grid item xl={3} xs={6} spacing={1}>
<CountUp start={0} end={860} delay={6}>
  {({ countUpRef }) => (
    <div className='container' style={{display:'flex', flexWrap:'wrap'}}>
    <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 style={{fontSize:'47px',fontWeight:'bolder',color:'#FF4495'}} class="card-title" ref={countUpRef}></h5>
    <h6 class="card-subtitle mb-2 text-muted">Highly specialised employees</h6>
  </div>
</div>
</div>
  )}
</CountUp>
</Grid>
<Grid item  xl={5} xs={10}>
<Typography sx={{marginTop:'1%',textAlign:'justify',fontSize:'20px',fontWeight:'400',color:'#545454'}}>With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.

- Shonda Leer, Chief of Staff at Franclin Technologies</Typography>
</Grid>
</Grid>
<Box sx={{display:'flex',justifyContent:'space-around',marginTop:'3%'}}>
<Box className='carousel' sx={{backgroundColor:'#ffff',width:'90%',height:'200px',display:'flex',flexWrap:'wrap',justifyContent:'center !important'}}>
<Carousel sx={{display:'flex',flexWrap:'wrap',justifyContent:'center !important'}}  cols={3} rows={1} gap={1} autoplay={2000} loop hideArrow={true}>
      <Carousel.Item >
        <img width="50%" src={brand1} />
      </Carousel.Item>  
      <Carousel.Item>
        <img width="50%" src={brand3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="50%" src={brand2} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="50%" src={brand4} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="50%" src={brand3} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="50%" src={brand4} />
      </Carousel.Item>
    
    </Carousel>
    </Box>
    </Box>
   </>
  )
}

export default Projects
