import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { CalificacionesContext } from '../../Context/BuildContext';
import { OptionsEVButtons } from '../../Components/OptionesButtons/OptionsEVButtons';

const createData = (
    id,
    descripcion,
    regimen,
    etapa,
    nota,
    materia,
    alumno,
    docente,
    CallBackEdit,
    CallBackView
) => {
    return {
        id,
        descripcion,
        regimen,
        etapa,
        nota,
        materia,
        alumno,
        docente,
        opciones: (
            <OptionsEVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
			/>
        )
    }
}

export const CalificacionesTable = () => {
    const {
        calificaciones,
        handleEdit,
        handleView
    } = useContext(CalificacionesContext);

    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'regimen', label: 'Regimen'},
        {id: 'etapa', label: 'Etapa'},
        {id: 'nota', label: 'Nota'},
        {id: 'materia', label: 'Materia'},
        {id: 'alumno', label: 'Alumno'},
        {id: 'docente', label: 'Docente'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = calificaciones.map((c) => (
        createData(
            c.id,
            c.descripcion,
            c.regimen,
            c.etapa,
            c.nota,
            c.descripcion_materia,
            c.nombre_alumno,
            c.nombre_docente,
            () => handleEdit(c),
            () => handleView(c.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={columns} rows={rows} />
        </Box>
    )
}
