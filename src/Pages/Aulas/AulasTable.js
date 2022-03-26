import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { AulasContext } from '../../Context/BuildContext';
import { OptionsERVButtons } from '../../Components/OptionesButtons/OptionsERVButtons';

const createData = (id, descripcion, CallBackEdit, CallBackView,CallBackDelete) => {
    return {
        id,
        descripcion,
        opciones: (
            <OptionsERVButtons
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
        {id: 'descripcion', label: 'Descripcion', minWidth: '360px'},
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
