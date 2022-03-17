import React, { useContext } from 'react';
import { SancionModal } from './SancionesModal';
import { SancionesContext } from '../../Context/BuildContext';
import { SancionesState } from '../../Context/SancionesState';
import { Box, Stack, Typography } from '@mui/material';
import { SancionesTable } from './SancionesTable';

const Sanciones = () => {
    const {isOpenModal, closeModal} = useContext(SancionesContext);
    
    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                >
                    Sanciones
                </Typography>
            </Stack>
            <SancionesTable />
            {
                isOpenModal && <SancionModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                />
            }
        </Box>
    )
};

export const SancionesScreen = () => {
    return (
        <SancionesState>
            <Sanciones />
        </SancionesState>
    );
}