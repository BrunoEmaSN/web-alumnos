import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { ButtonCreate, TypographyH3 } from '../../Components/GlobalStylesComponents/stylesComponents';
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
				<TypographyH3
					label="Clases"
				/>
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
