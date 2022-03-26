import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react';
import {
	ButtonCreate,
	TypographyH3
} from '../../Components/GlobalStylesComponents/stylesComponents';
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
				<TypographyH3
					label="Tutores"
				/>
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
