import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AlumnosContext } from '../../Context/BuildContext';
import { AlumnosTable } from './AlumnosTable';

export const AlumnosList = () => {
	const {
		handleCreate,
	} = useContext(AlumnosContext);

	return (
		<div>
			<Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				AlumnosList
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
			<AlumnosTable />
		</div>
	);
};
