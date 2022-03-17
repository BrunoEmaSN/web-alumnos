import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { CursosContext } from '../../Context/BuildContext';
import { NivelesList } from './Components/NivelesList';

const createData = (
    id,
    nivel,
    turno,
    gradoAno,
    division,
    aula,
    CallBackEdit,
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
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const CursosTable = () => {
    const {
        cursos,
        handleUpdate,
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
            () => handleDelete(c.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
