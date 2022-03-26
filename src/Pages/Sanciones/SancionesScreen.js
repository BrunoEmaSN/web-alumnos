import React, { useContext } from 'react';
import { SancionModal } from './SancionesModal';
import { SancionesContext } from '../../Context/BuildContext';
import { SancionesState } from '../../Context/SancionesState';
import { Box, Stack, Typography } from '@mui/material';
import { SancionesTable } from './SancionesTable';
import { ViewGeneric } from '../../Components/View/ViewGeneric';

const Sanciones = () => {
    const {
        isOpenModal,
        closeModal,
        isOpenModalView,
		closeModalView,
		data
    } = useContext(SancionesContext);
    
    return (
        <Box sx={{ p:3 }}>
			<Stack direction="row" spacing={2} margin={1}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
						color: '#222F3E'
					}}
                >
                    Sanciones
                </Typography>
            </Stack>
            <SancionesTable />
            {
                isOpenModal && <SancionModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                />
            }
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
    )
};

export const SancionesScreen = () => {
    return (
        <SancionesState>
            <Sanciones />
        </SancionesState>
    );
}