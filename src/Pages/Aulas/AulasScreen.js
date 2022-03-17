import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
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
    } = useContext(AulasContext);

    return (
        <div>
            <Typography
				variant="h2"
				component="div"
				gutterBottom
			>
				Aulas
			</Typography>
			<Button
				onClick={handleCreate}
				variant="outlined"
			>
				Crear Nuevo
			</Button>
            <AulasTable />
            {
                isOpenModal && <AulasModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};

export const AulasScreen = () => {
    return (
        <AulasState>
            <Aulas/>
        </AulasState>
    );
}