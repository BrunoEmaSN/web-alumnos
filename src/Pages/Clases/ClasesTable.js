import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { ClasesContext } from '../../Context/BuildContext';

const createData = (
    id,
    descripcion,
    dias,
    horarioInicio,
    horarioFin,
    periodo,
    CallBackEdit,
    CallBackDelete
) => {
    return {
        id,
        descripcion,
        dias,
        horarioInicio,
        horarioFin,
        periodo,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const ClasesTable = () => {
    const {
        clases,
        handleEdit,
        handleDelete
    } = useContext(ClasesContext);

    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'dias', label: 'Dias'},
        {id: 'horarioInicio', label: 'Horario Inicio'},
        {id: 'horarioFin', label: 'Horario Fin'},
        {id: 'periodo', label: 'Periodo'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = clases.map((c) => (
        createData(
            c.id,
            c.descripcion,
            c.dias,
            c.horario_inicio,
            c.horario_fin,
            c.periodo_descripcion,
            () => handleEdit(c.id),
            () => handleDelete(c.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
