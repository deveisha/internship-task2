import { AppBar, Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png.webp';
import { useRef } from 'react';
const pages = ['Home', 'About', 'Services','Case study','Blog','Contact'];
const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const[scroll,setScroll]=useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const scrollFunc=()=>{
    
    window.scrollY>=300 ? setScroll(true):setScroll(false)
    }

    useEffect(() => {
      window.addEventListener('scroll', scrollFunc);
      return () => {
        window.removeEventListener('scroll', scrollFunc);
      }
    }, [])
  
    console.log(scroll)
  return (
    <Grid container spacing={2}>
  <Grid item xs={12}>
  <AppBar position="fixed"
   onScroll={()=>scrollFunc()
 
  }
 id='navbar'
  sx={{ 
   
  backgroundColor: scroll? 'white' :'transparent',p:2,color:'black',
   boxShadow:scroll?'0 4px 8px 0 rgba(14, 30, 33, 0.492)':'none'


}}
  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={logo} alt="" />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              transition: 'all .3s ease-out 0s',

            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                variant:'contained'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',color:'black' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Typography
         
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },color:'black' }}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                className='nav-link' 
                sx={{ my: 2, color: 'black', fontFamily:'sans-serif', fontWeight:'bold', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="talk">
              <IconButton sx={{ padding:'12px',backgroundColor:'#FF4495',borderRadius:'30px',width:'150px',position:'absolute',left:'1513px',bottom:'1%'}}>
                Let's Talk
              </IconButton>
            
             </Tooltip>
             <Typography variant='h5' sx={{float:'left',marginTop:'5%',paddingLeft:'15px',color:{xl:'white',sm:'#FF4496',xs:'#FF4496',md:'#FF4496'}}}>Call us:+ 1023-09235934  </Typography>
            <Menu
              sx={{ mt: '45px',color:'black'}} 
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </Grid>
</Grid>
  )
}

export default Navbar
