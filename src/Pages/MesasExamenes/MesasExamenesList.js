import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MesasExamenesContext } from '../../Context/BuildContext';
import { MesasExamenesTable } from './MesasExamenesTable';

export const MesasExamenesList = () => {
    const {
        handleCreate
    } = useContext(MesasExamenesContext);

    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Mesas Examenes
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <MesasExamenesTable />
        </div>
    );
};