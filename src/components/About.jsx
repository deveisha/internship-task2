import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import about1 from '../images/about1.png';

const About = () => {
  return (
    <>
   <Grid container >
    <Grid sx={{display:'flex',justifyContent:'space-around'}}  item xl={6} sm={10} xs={10}>
     <Box sx={{marginTop:'5%'}}>
     <img style={{borderRadius:'48%',height:'100%',width:'100%',borderRadius:'50% 50% 50% 50%'}}  src={about1} alt="" />
     </Box>
    </Grid>
    <Grid sx={{marginTop:'5%'}} item xs={11} sm={10} xl={5}>
    <Typography variant='h5' sx={{color:'#FF4495'}}>About us</Typography>
     <Typography sx={{color:'black',textAlign:'justify'}}>With over 50 years of combined experience mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.
We're out to create purposeful spaces that balance art and creativity with science and strategy.</Typography>
   <IconButton sx={{textDecoration:'underline',color:'#FF4495'}}>Explore More</IconButton>
    </Grid>
   </Grid>
   </>
  )
}

export default About
