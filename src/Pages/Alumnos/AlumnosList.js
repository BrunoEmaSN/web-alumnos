import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import { ButtonCreate, TypographyH3 } from '../../Components/GlobalStylesComponents/stylesComponents';
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
				<TypographyH3
					label="Alumnos"
				/>
				<ButtonCreate CallBack={handleCreate} label="Crear Nuevo"/>
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
