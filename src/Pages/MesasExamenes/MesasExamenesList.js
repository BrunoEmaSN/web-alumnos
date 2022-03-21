import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ButtonCreate } from '../../Components/GlobalStylesComponents/stylesComponents';
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
				<Typography
					variant="h3"
					component="div"
					gutterBottom
				>
					Mesas Examenes
				</Typography>
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