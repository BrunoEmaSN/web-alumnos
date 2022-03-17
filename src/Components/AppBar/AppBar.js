import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { styles } from '../GlobalStylesComponents/styles';

const pages = [
    'Aulas',
    'Calificaciones',
    'Clases',
    'Cursos',
    'Materias',
    'MesasExamenes',
    'Sanciones'
];

const personas = [
    'Alumnos',
    'Docentes',
    'Tutores',
];

export const AppBarComponent = () => {
    const [ anchorElNav, setAnchorElNav ] = useState(null);
    const [ anchorElPersona, setAnchorElPersona ] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenPersonaMenu = (event) => {
        setAnchorElPersona(event.currentTarget);
    }

    const handleClosePersonaMenu = () => {
        setAnchorElPersona(null);
    }

    const classes = styles();

    return (
        <Box className={ classes.appBar }>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
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
                                    <Link key={page} to={ page }>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={ handleOpenPersonaMenu }
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Personas
                            </Button>
                            <Menu
                                anchorEl={anchorElPersona}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElPersona)}
                                onClose={handleClosePersonaMenu}
                                sx={{
                                    display: { xs: 'none', md: 'block' },
                                }}
                            >
                                {personas.map((persona) => (
                                    <Link
                                        key={persona}
                                        to={persona}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography
                                                textAlign="center"
                                                sx={{ color: '#009FE3' }}
                                            >
                                                {persona}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                            {pages.map((page) => (
                                <Link
                                    key={page}
                                    to={ page }
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
