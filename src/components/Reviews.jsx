import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-grid-carousel';
import review from '../images/review.png'

const Reviews = () => {
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'12%',alignItems:'center'}}>
     <Box className='review'  sx={{backgroundColor:'#ffff',width:{xl:'90%',xs:'100%',md:'100%',sm:'100%'},height:'600px',marginTop:'2%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Carousel  cols={1} rows={1} gap={1} autoplay={2000} loop hideArrow={true}>
          <Carousel.Item>
            <img width="10%" src={review} />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontSize:'19px',}}>"Even the all-powerful Pointing has no control about the blind texts <br /> it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. <br /> Craft beer elit seitan exercitation</Typography>
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <img width="10%" src={review} />
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontSize:'19px'}}>"Even the all-powerful Pointing has no control about the blind texts <br /> it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. <br /> Craft beer elit seitan exercitation</Typography>
            </Box>
          </Carousel.Item>
          <Carousel.Item>
          <img width="10%" src={review} />
          <Box sx={{display:'flex', flexWrap:'wrap' ,justifyContent:'center',alignItems:'center'}}>
            <Typography sx={{fontSize:'19px',}}>"Even the all-powerful Pointing has no control about the blind texts <br /> it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. <br /> Craft beer elit seitan exercitation</Typography>
            </Box>
          </Carousel.Item>
        </Carousel>
        </Box>
    </Box>
  )
}

export default Reviews
