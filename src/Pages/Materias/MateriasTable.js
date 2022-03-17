import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { MateriasContext } from '../../Context/BuildContext';

const createData = (
    id,
    descripcion,
    regimen,
    planEstudio,
    CallBackEdit,
    CallBackDelete
) => {
    return {
        id,
        descripcion,
        regimen,
        planEstudio,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const MateriasTable = () => {
    const {
        materias,
        handleEdit,
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
            () => handleDelete(m)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
