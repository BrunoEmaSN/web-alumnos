import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { AulasContext } from '../../Context/BuildContext';

const createData = (id, descripcion, CallBackEdit, CallBackView,CallBackDelete) => {
    return {
        id,
        descripcion,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const AulasTable = () => {
    const {
        aulas,
        handleUpdate,
        handleDelete,
        handleView
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
            () => handleView(a.id),
            () => handleDelete(a.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
