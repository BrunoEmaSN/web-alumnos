import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import { MateriasContext } from '../../Context/BuildContext';
import { MateriasTable } from './MateriasTable';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import {
	ButtonCreate,
	TypographyH3
} from '../../Components/GlobalStylesComponents/stylesComponents';

export const MateriasList = () => {
    const {
        handleCreate,
		isOpenModalView,
		closeModalView,
		data
    } = useContext(MateriasContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<TypographyH3
					label="Materias"
				/>
				<ButtonCreate CallBack={handleCreate} label="Crear Nueva"/>
			</Stack>
            <MateriasTable />
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