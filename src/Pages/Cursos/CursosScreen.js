import { Box, Button, Stack, Typography } from '@mui/material';
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
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                >
                    Cursos
                </Typography>
                <Button
                    onClick={handleCreate}
                    variant="outlined"
                    sx={{ padding: '0 2%', height: 50 }}
                >
                    Crear Nuevo
                </Button>
            </Stack>
            <CursosTable />
            {
                isOpenModal && <CursoModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </Box>
    )
};

export const CursosScreen = () => {
    return (
        <CursosState>
            <Cursos />
        </CursosState>
    );
}