import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { MateriasContext } from '../../Context/BuildContext';
import { OptionsERVButtons } from '../../Components/OptionesButtons/OptionsERVButtons';

const createData = (
    id,
    descripcion,
    regimen,
    planEstudio,
    CallBackEdit,
    CallBackView,
    CallBackDelete
) => {
    return {
        id,
        descripcion,
        regimen,
        planEstudio,
        opciones: (
            <OptionsERVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const MateriasTable = () => {
    const {
        materias,
        handleEdit,
        handleView,
        handleDelete
    } = useContext(MateriasContext);

    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'regimen', label: 'Regimen'},
        {id: 'planEstudio', label: 'Plan Estudio'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = materias.map((m) => (
        createData(
            m.id,
            m.descripcion,
            m.regimen,
            m.plan_estudio,
            () => handleEdit(m.id),
            () => handleView(m.id),
            () => handleDelete(m)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
