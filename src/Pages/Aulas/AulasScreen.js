import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AulasState } from '../../Context/AulasState';
import { AulasContext } from '../../Context/BuildContext';
import { AulasModal } from './AulasModal';
import { AulasTable } from './AulasTable';

const Aulas = () => {
    const {
        isOpenModal,
        closeModal,
        action,
        handleCreate,
    } = useContext(AulasContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                >
                    Aulas
                </Typography>
                <Button
                    onClick={handleCreate}
                    sx={{ padding: '0 2%', height: 50 }}
                    variant="outlined"
                >
                    Crear Nuevo
                </Button>
            </Stack>
            <AulasTable />
            {
                isOpenModal && <AulasModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </Box>
    )
};

export const AulasScreen = () => {
    return (
        <AulasState>
            <Aulas/>
        </AulasState>
    );
}