import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ClasesContext } from '../../Context/BuildContext';
import { ClasesTable } from './ClasesTable';

export const ClasesList = () => {
	const {
		handleCreate,
	} = useContext(ClasesContext);

	return (
		<div>
			<Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Clases
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
			<ClasesTable />
		</div>
	);
};
