import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { TutoresContext } from '../../Context/BuildContext';
import { TutoresState } from '../../Context/TutoresState';
import { TutoresList } from './TutoresList';
import { TutoresSave } from './TutoresSave';

const Tutores = () => {
    const {
        active
    } = useContext(TutoresContext);

    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries(active).length
                ? <TutoresSave />
                : <TutoresList />
            }
        </Box>
    );
};

export const TutoresScreen = () => {
    return (
        <TutoresState>
            <Tutores />
        </TutoresState>
    );
}