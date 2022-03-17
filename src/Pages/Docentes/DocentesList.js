import React, { useContext } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DocentesContext } from '../../Context/BuildContext';
import { DocentesTable } from './DocentesTable';

export const DocentesList = () => {
    const {
        handleCreate,
    } = useContext(DocentesContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Docentes
				</Typography>
				<Button
					onClick={handleCreate}
					variant="outlined"
					sx={{ padding: '0 2%', height: 50 }}
				>
					Crear Nuevo
				</Button>
			</Stack>
			<DocentesTable />
		</Box>
    );
};
