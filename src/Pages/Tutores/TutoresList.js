import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { TutoresContext } from '../../Context/BuildContext';
import { TutoresTable } from './TutoresTable';

export const TutoresList = () => {
    const {
        handleCreate
    } = useContext(TutoresContext);

    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Tutores
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <TutoresTable />
        </div>
    );
};
