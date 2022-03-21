import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ButtonCreate } from '../../Components/GlobalStylesComponents/stylesComponents';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { TutoresContext } from '../../Context/BuildContext';
import { TutoresTable } from './TutoresTable';

export const TutoresList = () => {
    const {
        handleCreate,
		isOpenModalView,
		closeModalView,
		data
    } = useContext(TutoresContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Tutores
				</Typography>
				<ButtonCreate CallBack={handleCreate} label="Crear Nuevo"/>
			</Stack>
            <TutoresTable />
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
