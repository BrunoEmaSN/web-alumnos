import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CursosContext } from '../../Context/BuildContext';
import { CursosState } from '../../Context/CursosState';
import { CursoModal } from './CursosModal';
import { CursosTable } from './CursosTable';

const Cursos = () => {
    const {
        action,
        isOpenModal,
        closeModal,
        handleCreate,
    } = useContext(CursosContext)
    
    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Cursos
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <CursosTable />
            {
                isOpenModal && <CursoModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};

export const CursosScreen = () => {
    return (
        <CursosState>
            <Cursos />
        </CursosState>
    );
}