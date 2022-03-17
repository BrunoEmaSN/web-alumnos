import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CalificacionesTable } from './CalificacionesTable';

export const CalificacionesList = () => {
	return (
		<Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Calificaciones
				</Typography>
			</Stack>
			<CalificacionesTable />
		</Box>
	);
};
