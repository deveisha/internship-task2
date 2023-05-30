import { Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-grid-carousel';
import stuffs1 from '../images/stuffs1.jpg.webp'
import stuffs2 from '../images/stuffs2.jpg.webp'
import stuffs3 from '../images/stuffs3.jpg.webp'


const Stuffs = () => {
  return (
    <>
    <Box >
        <Typography style={{fontSize:'27px',fontWeight:'400',color:'#FF4495',marginTop:'2%'}} >
            CASE STUDY</Typography>
            <Typography style={{fontWeight:'700',fontFamily:'"Nunito", sans-serif'}} variant='h3'>some of our important stuff</Typography>
    </Box>
    <Box  sx={{backgroundColor:'#ffff',width:'98%',height:'200px',marginTop:'2%',display:'flex',justifyContent:'center'}}>
    <Carousel   cols={4} rows={1} gap={1}  autoplay={2000} loop>
          <Carousel.Item  >
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs1} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
         
           
          </Carousel.Item>
          <Carousel.Item>
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs2} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
          </Carousel.Item>
          <Carousel.Item>
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs3} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
        
          </Carousel.Item>
          <Carousel.Item>
         
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs1} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
          </Carousel.Item>
          <Carousel.Item>
         
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs2} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
          </Carousel.Item>
          <Carousel.Item>
          
          <Box sx={{position:"relative"}}>
            <img width="75%" src={stuffs3} />
            <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
          <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
          </Box>
          </Carousel.Item>
          <Carousel.Item>
         
         <Box sx={{position:"relative"}}>
           <img width="75%" src={stuffs1} />
           <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
         <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
         </Box>
         </Carousel.Item>
         <Carousel.Item>
         
         <Box sx={{position:"relative"}}>
           <img width="75%" src={stuffs2} />
           <Typography variant='h5' style={{position:'absolute',top:'64%',left:'17%',color:'#fff'}}>Marketing</Typography>
         <Typography variant='h5' style={{position:'absolute',top:'74%',left:'17%',color:'#fff'}}>Discover,Explore the product</Typography>
         </Box>
         </Carousel.Item>
        
        </Carousel>
        </Box>
        </>
  )
}

export default Stuffs
