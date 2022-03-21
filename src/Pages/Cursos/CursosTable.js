import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { CursosContext } from '../../Context/BuildContext';
import { NivelesList } from './Components/NivelesList';
import { OptionsERVButtons } from '../../Components/OptionesButtons/OptionsERVButtons';

const createData = (
    id,
    nivel,
    turno,
    gradoAno,
    division,
    aula,
    CallBackEdit,
    CallBackView,
    CallBackDelete
) => {
    return {
        id,
        nivel: <NivelesList nivel={ nivel } />,
        turno,
        gradoAno,
        division,
        aula,
        opciones: (
            <OptionsERVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const CursosTable = () => {
    const {
        cursos,
        handleUpdate,
        handleView,
        handleDelete
    } = useContext(CursosContext);

    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'nivel', label: 'Nivel'},
        {id: 'turno', label: 'Turno'},
        {id: 'gradoAno', label: 'Grado Año'},
        {id: 'division', label: 'Division'},
        {id: 'aula', label: 'Aula'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = cursos.map((c) => (
        createData(
            c.id,
            c.nivel,
            c.turno,
            c.grado_ano,
            c.division,
            c.aula_descripcion,
            () => handleUpdate(c),
            () => handleView(c.id),
            () => handleDelete(c.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
