import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
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
				<Button
					onClick={handleCreate}
					sx={{ padding: '0 2%', height: 50 }}
					variant="outlined"
				>
					Crear Nuevo
				</Button>
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