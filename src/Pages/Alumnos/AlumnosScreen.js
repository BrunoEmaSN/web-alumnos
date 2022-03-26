import React, { useContext } from 'react'
import { Box } from '@mui/system';
import { AlumnosState } from '../../Context/AlumnosState';
import { AlumnosContext } from '../../Context/BuildContext';
import { AlumnosList } from './AlumnosList';
import { AlumnosSave } from './AlumnosSave';

const Alumnos = () => {
    const { active } = useContext( AlumnosContext )
    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries( active ).length
                ? <AlumnosSave />
                : <AlumnosList />
            }
        </Box>
    )
}

export const AlumnosScreen = () => {
    return (
        <AlumnosState>
            <Alumnos />
        </AlumnosState>
    );
}
