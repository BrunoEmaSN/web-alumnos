import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { ClasesContext } from '../../Context/BuildContext';
import { ClasesState } from '../../Context/ClasesState';
import { ClasesList } from './ClasesList';
import { ClasesSave } from './ClasesSave';

const Clases = () => {
    const { active } = useContext(ClasesContext)
    
    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries(active).length
                ? <ClasesSave />
                : <ClasesList />
            }
        </Box>
    )
}

export const ClasesScreen = () => {
    return (
        <ClasesState>
            <Clases />
        </ClasesState>
    );
}