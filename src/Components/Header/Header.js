import React, { useContext } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

export const Header = () => {
    const { handleLogout } = useContext( AppContext );
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            component="nav"
            sx={{ width: { sm: 240 }, flexShrink: { sm: 0 }}}
            aria-label="mailbox folders"
        >
            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        bgcolor: '#222F3E'
                    },
                }}
            >
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
                    <Box
                        sx={{
                            height: '34%',
                            display: 'flex',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Button
                            fullWidth
                            onClick={handleLogout}
                            sx={{
                                bgcolor: '#00C6B7',
                                color: '#222F3E',
                                '&:hover': {
                                    color: '#00C6B7',
                                }
                            }}
                        >
                            Cerrar Session
                        </Button>
                    </Box>
                </List>
            </Drawer>
        </Box>
    )
}
