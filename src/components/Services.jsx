import { Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import services1 from '../images/services1.jpg';
import services2 from '../images/services2.png';
import services3 from '../images/services3.webp'
 
  
const Services = () => {
    
  return (
    <>
    <Box sx={{display:'flex', flexWrap:'wrap',  justifyContent:'center',}}>

    <Typography variant='h4' sx={{color:'#FF4495',fontSize:{xl:'26px',xs:'20px',sm:'22px',md:'24px'}}}>our services</Typography>
    </Box>
    <Box>
    <Typography variant='h3' sx={{fontFamily:'Nunito",sans-serif',fontSize:{xl:'26px',xs:'27px',sm:'32px',md:'34px'}}}>Provide awesome service <br /> with our tools</Typography>
    </Box>
    <Box sx={{display:'flex', flexWrap:'wrap',  justifyContent:'space-around',marginTop:'5%'}}>
        
    <Card id='card1' variant='outlined'sx={{width:{xl:'17%',sm:'38%',md:'38%',xs:'66%'},height:{xl:'18rem',sm:'18rem',md:'18rem',xs:'18rem'}}}>
      <CardContent>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',color:"black" }} color="text.secondary" gutterBottom>
         Discover,Explore the content
        </Typography>
        <CardMedia >
            <img style={{height:'100px',width:'100px'}} src={services1} alt="abc" />
        </CardMedia>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',marginTop:'9%' }} variant="body2">
        Effective strategies to help you reach customers.
        </Typography>
      </CardContent>
      
    </Card>
    <Card id='card1'  variant='outlined'sx={{width:{xl:'17%',sm:'38%',md:'38%',xs:'66%'},height:{xl:'18rem',sm:'18rem',md:'18rem',xs:'18rem'}}}>
      <CardContent>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',color:"black" }} color="text.secondary" gutterBottom>
         Discover,Explore the content
        </Typography>
        <CardMedia >
            <img style={{height:'100px',width:'100px'}} src={services2} alt="abc" />
        </CardMedia>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',marginTop:'9%' }} variant="body2">
        Effective strategies to help you reach customers.
        </Typography>
      </CardContent>
      
    </Card>
    <Card  id='card1' variant='outlined'sx={{width:{xl:'17%',sm:'38%',md:'38%',xs:'66%'},height:{xl:'18rem',sm:'18rem',md:'18rem',xs:'18rem'}}}>
      <CardContent>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',color:"black" }} color="text.secondary" gutterBottom>
         Discover,Explore the content
        </Typography>
        <CardMedia >
            <img style={{height:'100px',width:'100px'}} src={services3} alt="abc" />
        </CardMedia>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',marginTop:'9%' }} variant="body2">
        Effective strategies to help you reach customers.
        </Typography>
      </CardContent>
      
    </Card>
    <Card id='card1' variant='outlined'sx={{width:{xl:'17%',sm:'38%',md:'38%',xs:'66%'},height:{xl:'18rem',sm:'18rem',md:'18rem',xs:'18rem'}}}>
      <CardContent className='cardMedia'>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',color:"black" }} color="text.secondary" gutterBottom>
         Discover,Explore the content
        </Typography>
        <CardMedia >
            <img style={{height:'100px',width:'100px',color:'#FF4495'}} src={services3} alt="abc" />
        </CardMedia>
        <Typography sx={{ fontSize:'14',fontWeight:'bold',marginTop:'9%' }} variant="body2">
        Effective strategies to help you reach customers.
        </Typography>
      </CardContent>
      
    </Card>
     </Box>
    </>
  )
}

export default Services
