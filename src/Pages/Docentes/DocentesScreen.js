import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { DocentesContext } from '../../Context/BuildContext';
import { DocentesState } from '../../Context/DocentesState';
import { DocentesList } from './DocentesList';
import { DocentesSave } from './DocentesSave';

const Docentes = () => {
    const { active } = useContext(DocentesContext);

    return (
        <Box sx={{ p:3, marginTop: 35 }}>
            {
                Object.entries(active).length
                ? <DocentesSave />
                : <DocentesList />
            }
        </Box>
    );
};

export const DocentesScreen = () => {
    return (
        <DocentesState>
            <Docentes />
        </DocentesState>
    );
}