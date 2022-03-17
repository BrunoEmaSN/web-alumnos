import React, { useContext } from 'react';
import { SancionModal } from './SancionesModal';
import { SancionesContext } from '../../Context/BuildContext';
import { SancionesState } from '../../Context/SancionesState';
import { Typography } from '@mui/material';
import { SancionesTable } from './SancionesTable';

const Sanciones = () => {
    const {isOpenModal, closeModal} = useContext(SancionesContext);
    
    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Sanciones
			</Typography>
            <SancionesTable />
            {
                isOpenModal && <SancionModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                />
            }
        </div>
    )
};

export const SancionesScreen = () => {
    return (
        <SancionesState>
            <Sanciones />
        </SancionesState>
    );
}