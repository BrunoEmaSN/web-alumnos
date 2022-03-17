import React from 'react';
import { Typography } from '@mui/material';
import { CalificacionesTable } from './CalificacionesTable';

export const CalificacionesList = () => {
	return (
		<div>
			<Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Calificaciones
			</Typography>
			<CalificacionesTable />
		</div>
	);
};
