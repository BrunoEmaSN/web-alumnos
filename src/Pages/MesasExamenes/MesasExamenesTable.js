import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { MesasExamenesContext } from '../../Context/BuildContext';
import moment from 'moment';

const createData = (
    id,
    descripcion,
    fechaInicio,
    fechaFin,
    periodo,
    CallBackEdit,
    CallBackDelete
) => {
    return {
        id,
        descripcion,
        fechaInicio,
        fechaFin,
        periodo,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const MesasExamenesTable = () => {
    const {
        mesasExamenes,
        handleEdit,
        handleDelete
    } = useContext(MesasExamenesContext);
    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'fechaInicio', label: 'Fecha Inicio'},
        {id: 'fechaFin', label: 'FechaFin'},
        {id: 'periodo', label: 'Periodo'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = mesasExamenes.map((m) => (
        createData(
            m.id,
            m.descripcion,
            moment(m.fecha_inicio).format('yyyy-MM-DD'),
            moment(m.fecha_fin).format('yyyy-MM-DD'),
            m.periodo_descripcion,
            () => handleEdit(m),
            () => handleDelete(m.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
