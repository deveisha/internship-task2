
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import img from '../images/img.jpg';
import shape1 from '../images/shape1.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';




const Customer = () => {
  
 
  return (
    <>
    <Grid container spacing={2}>

  <Grid sx={{display:'flex',justifyContent:'center',backgroundImage:`url(${shape1})`,marginTop:'1%',borderRadius:'20px',marginTop:'5%',background:'transparent'}}  item xl={5} xs={6} sm={5}>
    <Box>
    <Box variant='contained' sx={{
        marginLeft:{xl:'190px',xs:'50px',sm:'90px',md:'95px'},
        marginTop:{sm:'38%',md:'26%',xl:'16%',xs:'40%'},
        border:'2px solid grey',
        width:{xs:'200px',xl:'210px',sm:'200px'},
        borderRadius:'34px'  ,
        display:'flex' ,
        flexWrap:"wrap",
        justifyContent:"center",

          }}>
<IconButton  sx={{color:'#FF4495',padding:'6px',fontSize:{xl:'16px',xs:'15px',sm:'16px'},}}>digital marketing expert</IconButton>
  
    </Box>

   
 <Grid xs={8} xl={8} sm={10}>
 <Box sx={{textAlign:'justify',display:'flex',flexWrap:'wrap'}} ><Typography sx={{fontWeight:'bold',fontFamily:'Nunito",sans-serif',fontSize:{xs:'18px',xl:'48px'},marginLeft:{xl:'34%',xs:'37%',md:'35%',sm:'40%'},marginTop:{xl:'19px',xs:'5%',sm:'5%',md:'5%'}}} variant='h1'>We Bring you New Customers</Typography>
 <Typography sx={{marginLeft:{xl:'190px',md:'120px',sm:'98px',xs:'70px'},display:'flex',flexWrap:'wrap',fontSize:{xs:'15px',sm:'16px',md:'17px'}}} >We build effective strategies to help you reach customers and prospects across the entire web</Typography>
 </Box>
 </Grid>
  
 <Grid item xs={6}>
 <Box > <Button variant='contained' sx={{marginTop:'10%',borderRadius:'34px',backgroundColor:'#FF4495',width:{sm:'70%',md:'70%',xs:'68%'},padding:{xl:'12px',xs:'10px',md:'8px',sm:'7px'},color:"white",fontSize:{xl:"19px",xs:'5px',md:'10px',sm:'8px'},marginLeft:{xl:'190px',xs:'80px',md:'135px',sm:'105px'}}}>explore services</Button></Box>
 </Grid>


  
    </Box>
    </Grid>
  <Grid  item md={5} xs={6}>
 <Box sx={{
 backgroundImage:`url(${img})`,
 backgroundClip:'cover',
 backgroundRepeat:'no-repeat',
 zIndex:'-5',
position:'relative',
left:{xl:'53%',xs:'30px',sm:'53%',md:'60%',},
 minHeight:{xl:'90vh',sm:'50vh',md:'50vh',xs:"55vh"},
width:{xl:'90%',xs:'40vh',sm:'65%',md:'93%'},
height:'100%',
 borderTopLeftRadius:"40%",
 borderBottomLeftRadius:'50%',
 borderBottomRightRadius:'30%',
   color:'black',
backgroundSize: 'cover'
 }}>

 
 
<a href='../images/v1.mp4'>
 <PlayCircleIcon    sx={{position:'relative',color:'white',cursor:'pointer',top:'220px',width:'26%',height:'30%' ,':hover':{color:'pink'}}}/>
 
 </a> 
 </Box>
  </Grid>
  
   
  </Grid>

  </>
  )
}

export default Customer
