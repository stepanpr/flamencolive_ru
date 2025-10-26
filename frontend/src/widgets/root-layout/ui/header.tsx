import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'Blog'];

interface ILink {
    name: string;
    href: `/${string}`;
}

const links: ILink[] = [
    { name: 'о нас', href: '/about' },
    { name: 'афиша', href: '/events' },
    { name: 'контакты', href: '/contacts' },
];

export const Header = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (href: ILink['href']) => {
        handleCloseNavMenu();
        navigate(href);
    };

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid red' }}>
                    {/** LOGO */}
                    <Box>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            onClick={() => navigate('/')}
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            FlamencoLive
                        </Typography>
                    </Box>

                    {/** BURGER-MENU */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {links.map(({ name, href }) => (
                                <MenuItem key={name} onClick={() => handleNavigate(href)}>
                                    <Typography sx={{ textAlign: 'center' }}>{name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/** MENU */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {links.map(({ name, href }) => (
                            <Button key={name} onClick={() => handleNavigate(href)} sx={{ color: 'black' }}>
                                {name}
                            </Button>
                            // <Link key={name} component={RouterLink} to={href}>
                            //     {name}
                            // </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
