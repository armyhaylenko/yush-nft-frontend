import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './styles.css'


const pages = ['Discover', 'About', 'Artists',  'Help'];


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static"  sx={{
            background:'none',
            boxShadow:'none',
            margin: 0,
            padding: 0,
        }}>
        <Container sx={{
            padding: 0,
            margin: 0,
        }}>
        <Toolbar disableGutters>
        <div className="female" />
    <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
        mr: 2,
            display: { xs: 'none', md: 'flex' },
        fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            color: '#000',
            fontSize: '52px',
        textDecoration: 'none',
        lineHeight:'62px',
    }}
>
    YUSH
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
    }}
    keepMounted
    transformOrigin={{
        vertical: 'top',
            horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{
        display: { xs: 'block', md: 'none' },
    }}
>
    {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
    <Typography textAlign="center">{page}</Typography>
        </MenuItem>
    ))}
    </Menu>
    </Box>
    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
    LOGO
    </Typography>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
    {pages.map((page) => (
        <Button
            key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2,
            color: '#554D4D',
            display: 'block',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
        }}
    >
        {page}
        </Button>
    ))}
    </Box>
            <Button variant="outlined"   sx={{ my: 1,
                color: '#FC6327',
                display: 'block',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '22px',
                width: '116px',
                height: '22px',
            }}>Connect Wallet</Button>
    </Toolbar>
    </Container>
    </AppBar>
);
}
export default ResponsiveAppBar;
