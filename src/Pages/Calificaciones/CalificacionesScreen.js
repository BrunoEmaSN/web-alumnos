import React, { useContext } from 'react'
import { Box } from '@material-ui/core';
import { CalificacionesContext } from '../../Context/BuildContext';
import { CalificacionesState } from '../../Context/CalificacionesState';
import { CalificacionesList } from './CalificacionesList';
import { CalificacionesSave } from './CalificacionesSave';

const Calificaciones = () => {
    const {
        active
    } = useContext(CalificacionesContext);

    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries(active).length
                ? <CalificacionesSave />
                : <CalificacionesList />
            }
        </Box>
    )
}

export const CalificacionesScreen = () => {
    return (
        <CalificacionesState>
            <Calificaciones/>
        </CalificacionesState>
    );
}
