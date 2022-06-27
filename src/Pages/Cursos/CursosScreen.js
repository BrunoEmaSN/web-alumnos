import { Box, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ButtonCreate } from '../../Components/GlobalStylesComponents/stylesComponents';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { CursosContext } from '../../Context/BuildContext';
import { CursosState } from '../../Context/CursosState';
import { CursoModal } from './CursosModal';
import { CursosTable } from './CursosTable';

const Cursos = () => {
    const {
        action,
        isOpenModal,
        closeModal,
        handleCreate,
        isOpenModalView,
		closeModalView,
		data
    } = useContext(CursosContext)
    
    return (
        <Box sx={{ p:3, marginTop: 5 }}>
			<Stack direction="row" spacing={2} margin={1}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
						color: '#222F3E'
					}}
                >
                    Cursos
                </Typography>
                <ButtonCreate CallBack={handleCreate} label="Crear Nuevo"/>
            </Stack>
            <CursosTable />
            {
                isOpenModal && <CursoModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
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

export const CursosScreen = () => {
    return (
        <CursosState>
            <Cursos />
        </CursosState>
    );
}