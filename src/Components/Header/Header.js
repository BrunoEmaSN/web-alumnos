import React, { useContext, useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Box,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useMediaQuery } from '@material-ui/core';
import { theme } from '../GlobalStylesComponents/theme';
import { styled } from '@material-ui/styles';

import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from '../../Context/BuildContext';

const pages = [
    'Aulas',
    'Calificaciones',
    'Clases',
    'Cursos',
    'Materias',
    'MesasExamenes',
    'Sanciones'
];

const personas = [ 'Alumnos', 'Docentes', 'Tutores' ];

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
  

export const Header = () => {
    const { handleLogout } = useContext( AppContext );
    const [open, setOpen] = useState(false);

    const toggleDrawer = event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(!open);
    };
    const navigate = useNavigate();
    const location = useLocation();

    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            component="nav"
            sx={{ width: { sm: !isMdUp ? 0 : 240 }, flexShrink: { sm: 0 }}}
            aria-label="mailbox folders"
        >
            <AppBar position="fixed" sx={{ boxShadow: 'none', bgcolor: 'transparent' }}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={1}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={toggleDrawer}
                                sx={{
                                    color: '/' === location.pathname ? '#fff' : '#222F3E',
                                    '&:hover': {
                                        color: '#222F3E',
                                        bgcolor: '#00C6B7',
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8}>

                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleLogout}
                                sx={{
                                    color: '/' === location.pathname ? '#fff' : '#222F3E',
                                    '&:hover': {
                                        color: '#222F3E',
                                        bgcolor: '#00C6B7',
                                    }
                                }}
                            >
                                <LogoutRoundedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                variant={isMdUp ? "permanent" : "persistent"}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        bgcolor: '#222F3E',
                        width: 240,
                    },
                }}
                open={open}
            >
                <DrawerHeader
                    theme={theme}
                    style={{ display: isMdUp ? 'none' : 'flex' }}
                >
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                color: '#222F3E',
                                bgcolor: '#00C6B7',
                            }
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    <ListItem
                        button
                        onClick={() => navigate('/')}
                        selected={'/' === location.pathname}
                    >
                        <ListItemText
                            primary="Inicio"
                            sx={{ color: '#fff' }}
                        />
                    </ListItem>
                    <Accordion
                        sx={{
                            border: 'none',
                            boxShadow: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon sx={{ color: '#00C6B7' }} />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ color: '#00C6B7' }}
                        >
                            <Typography>Personas</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            { personas.map((persona) => (
                                <ListItem
                                    button
                                    key={persona}
                                    onClick={() => navigate(persona)}
                                    selected={
                                        `/${persona}` === location.pathname
                                    }
                                >
                                    <ListItemText
                                        primary={persona}
                                        sx={{ color: '#00C6B7' }}
                                    />
                                </ListItem>
                            )) }
                        </AccordionDetails>
                    </Accordion>
                    { pages.map((page) => (
                        <ListItem
                            button
                            key={page}
                            onClick={() => navigate(page)}
                            selected={`/${page}` === location.pathname}
                        >
                            <ListItemText
                                primary={page}
                                sx={{ color: '#fff' }}
                            />
                        </ListItem>
                    )) }
                </List>
            </Drawer>
        </Box>
    )
}
