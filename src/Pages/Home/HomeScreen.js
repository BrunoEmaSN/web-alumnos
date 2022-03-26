import React from 'react';
import { Box } from '@material-ui/core';
import Home2 from '../../Resources/img/home2.jpg';
import { HomeImg } from './Components/HomeImg';

export const HomeScreen = () => {
    return (
        <Box>
            <HomeImg
                title="Web Alumnos"
                description="Es el proyecto final de la carrera Analista de Sistemas de la Escuela Normal Superior Nº 10"
                link="#"
                linkText="Leer mas..."
                image={Home2}
                imageText="home2"
            />
        </Box>
    )
}
