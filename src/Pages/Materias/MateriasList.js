import React, { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { MateriasContext } from '../../Context/BuildContext';
import { MateriasTable } from './MateriasTable';

export const MateriasList = () => {
    const {
        handleCreate,
    } = useContext(MateriasContext);

    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Materias
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <MateriasTable />
        </div>
    );
};