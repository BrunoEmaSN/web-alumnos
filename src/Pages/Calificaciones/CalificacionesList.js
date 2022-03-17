import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CalificacionesTable } from './CalificacionesTable';
import { CalificacionesContext } from '../../Context/BuildContext';
import { ViewGeneric } from '../../Components/View/ViewGeneric';

export const CalificacionesList = () => {
	const {
		isOpenModalView,
		closeModalView,
		data
	} = useContext(CalificacionesContext);
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
