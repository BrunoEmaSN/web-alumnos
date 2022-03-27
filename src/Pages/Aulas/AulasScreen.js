import React, { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import {
    ButtonCreate,
    TypographyH3
} from '../../Components/GlobalStylesComponents/stylesComponents';
import { ViewGeneric } from '../../Components/View/ViewGeneric';
import { AulasState } from '../../Context/AulasState';
import { AulasContext } from '../../Context/BuildContext';
import { AulasModal } from './AulasModal';
import { AulasTable } from './AulasTable';

const Aulas = () => {
    const {
        isOpenModal,
        closeModal,
        action,
        handleCreate,
        isOpenModalView,
		closeModalView,
		data
    } = useContext(AulasContext);

    return (
        <Box sx={{ p:3, marginTop: 5 }}>
			<Stack direction="row" spacing={2} margin={1}>
                <TypographyH3
                    label="Aulas"
                />
                <ButtonCreate CallBack={handleCreate} label="Crear Nueva"/>
            </Stack>
            <AulasTable />
            {
                isOpenModal && <AulasModal
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

export const AulasScreen = () => {
    return (
        <AulasState>
            <Aulas/>
        </AulasState>
    );
}