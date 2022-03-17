import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { AulasContext } from '../../Context/BuildContext';

const createData = (id, descripcion, CallBackEdit, CallBackDelete) => {
    return {
        id,
        descripcion,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const AulasTable = () => {
    const {
        aulas,
        handleUpdate,
        handleDelete
    } = useContext(AulasContext);

    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = aulas.map((a) => (
        createData(
            a.id,
            a.descripcion,
            () => handleUpdate(a),
            () => handleDelete(a.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
