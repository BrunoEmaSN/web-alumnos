import React, { useContext } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { MateriasContext } from '../../Context/BuildContext';
import { MateriasTable } from './MateriasTable';

export const MateriasList = () => {
    const {
        handleCreate,
    } = useContext(MateriasContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Materias
				</Typography>
				<Button
					onClick={handleCreate}
					sx={{ padding: '0 2%', height: 50 }}
					variant="outlined"
				>
					Crear Nuevo
				</Button>
			</Stack>
            <MateriasTable />
		</Box>
    );
};