import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ButtonCreate } from '../../Components/GlobalStylesComponents/stylesComponents';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { ClasesContext } from '../../Context/BuildContext';
import { ClasesTable } from './ClasesTable';

export const ClasesList = () => {
	const {
		handleCreate,
		isOpenModalView,
		closeModalView,
		data
	} = useContext(ClasesContext);

	return (
		<Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Clases
				</Typography>
				<ButtonCreate CallBack={handleCreate} label="Crear Nueva"/>
			</Stack>
			<ClasesTable />
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
