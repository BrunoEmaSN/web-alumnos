import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { DocentesContext } from '../../Context/BuildContext';
import { DocentesTable } from './DocentesTable';

export const DocentesList = () => {
    const {
        handleCreate,
    } = useContext(DocentesContext);

    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Docentes
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <DocentesTable />
        </div>
    );
};
