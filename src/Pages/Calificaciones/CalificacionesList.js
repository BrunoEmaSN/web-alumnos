import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import { CalificacionesTable } from './CalificacionesTable';
import { CalificacionesContext } from '../../Context/BuildContext';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { TypographyH3 } from '../../Components/GlobalStylesComponents/stylesComponents';

export const CalificacionesList = () => {
	const {
		isOpenModalView,
		closeModalView,
		data
	} = useContext(CalificacionesContext);
	return (
		<Box>
			<Stack direction="row" spacing={2} margin={1}>
				<TypographyH3
					label="Calificaciones"
				/>
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
