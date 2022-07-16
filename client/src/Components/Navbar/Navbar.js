import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import  Typography  from '@mui/material/Typography'
import { Toolbar, Box, Button, IconButton, ThemeProvider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import {theme} from './theme'

let pages = ['Getting Started', 'External Resources', 'TBD']
let userButtons = ['Log in', 'Sign up']

const Navbar = () => {
    return(
        <ThemeProvider theme={theme}>
        <AppBar position='static' >
            <Container maxWidth="xl" >
               <Toolbar disableGutters> 

               {/* DESKTOP UI FORMAT */}
                <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    href='/'
                    sx = {{
                        mr: 5,
                        display: { xs: 'none', md: 'flex'},
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 800
                    }}
                >
                    Codedeets
                </Typography>

                {/* MOBILE UI FORMAT */}
                <Box sx = {{ flexGrow:1, display: {xs: 'flex', md: 'none'} }}>
                    <IconButton
                        size = 'large'
                        color=  'inherit'
                    >
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                </Box>

                
                {/* DESKTOP UI FORMAT */}
                <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button 
                            key={page}
                            sx = {{my: 2, color: 'white', display: 'flex', fontWeight: 700}}
                        >
                            {page}
                        </Button>
                    ))}   
                </Box>
                    
                {/* MOBILE UI FORMAT */}
                <Typography
                    variant='h5'
                    noWrap
                    component="a"
                    href="/"
                    sx = {{
                        mr: 2,
                        display: { xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontWeight: 800,
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                >
                    Codedeets
                </Typography>



                <Box sx={{display: 'flex'}}>
                    {userButtons.map((userButton) => (
                        <Button
                            key={userButton}
                            sx = {{my: 2, color: 'white', display: 'block', fontWeight: 700}}
                        >
                            {userButton}
                        </Button>
                    ))}
                </Box>    



                </Toolbar>
            
            </Container>

        </AppBar>
        </ThemeProvider>
    )

}

export default Navbar