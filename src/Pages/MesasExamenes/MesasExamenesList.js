import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MesasExamenesContext } from '../../Context/BuildContext';
import { MesasExamenesTable } from './MesasExamenesTable';

export const MesasExamenesList = () => {
    const {
        handleCreate
    } = useContext(MesasExamenesContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Mesas Examenes
				</Typography>
				<Button
					onClick={handleCreate}
					sx={{ padding: '0 2%', height: 50 }}
					variant="outlined"
				>
					Crear Nuevo
				</Button>
			</Stack>
            <MesasExamenesTable />
		</Box>
    );
};