import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DocentesContext } from '../../Context/BuildContext';
import { DocentesTable } from './DocentesTable';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { ButtonCreate } from '../../Components/GlobalStylesComponents/stylesComponents';

export const DocentesList = () => {
    const {
        handleCreate,
		isOpenModalView,
		closeModalView,
		data
    } = useContext(DocentesContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Docentes
				</Typography>
				<ButtonCreate CallBack={handleCreate} label="Crear Nuevo"/>
			</Stack>
			<DocentesTable />
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
