import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react';
import {
	ButtonCreate,
	TypographyH3
} from '../../Components/GlobalStylesComponents/stylesComponents';
import { MesasExamenesContext } from '../../Context/BuildContext';
import { ViewMesaExamen } from './Components/ViewMesaExamen';
import { MesasExamenesTable } from './MesasExamenesTable';

export const MesasExamenesList = () => {
    const {
        handleCreate,
		isOpenModalView,
		closeModalView,
		data
    } = useContext(MesasExamenesContext);

    return (
        <Box>
			<Stack direction="row" spacing={2} margin={1}>
				<TypographyH3
					label="Mesas Examenes"
				/>
				<ButtonCreate CallBack={handleCreate} label="Crear Nueva"/>
			</Stack>
            <MesasExamenesTable />
			{
                isOpenModalView && (
					<ViewMesaExamen
						data={data}
						isOpen={isOpenModalView}
						handleClose={closeModalView}
					/>
				)
            }
		</Box>
    );
};