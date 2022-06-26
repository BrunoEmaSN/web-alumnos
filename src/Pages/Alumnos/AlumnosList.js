import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { AlumnosContext } from '../../Context/BuildContext';
import { AlumnosTable } from './AlumnosTable';

export const AlumnosList = () => {
	const {
		handleCreate,
		isOpenModalView,
		closeModalView,
		data
	} = useContext(AlumnosContext);

	return (
		<Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Alumnos
				</Typography>
				<Button
					onClick={handleCreate}
					sx={{ padding: '0 2%', height: 50 }}
					variant="outlined"
				>
					Crear Nuevo
				</Button>
			</Stack>
			<AlumnosTable />
			{
				isOpenModalView && (
					<ViewGeneric
						data={data}
						isOpen={isOpenModalView}
						handleClose={closeModalView}
					/>
				)
			}
		</Box>
	);
};
