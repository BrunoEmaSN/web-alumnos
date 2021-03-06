import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { OpcionesEVButtons } from '../../Components/OptionesButtons/OptionesEVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { SancionesContext } from '../../Context/BuildContext';
import moment from 'moment';

const createData = (
    id,
    descripcion,
    tipoSancion,
    fecha,
    CallBackEdit,
    CallBackView
) => {
    return {
        id,
        descripcion,
        tipoSancion,
        fecha,
        opciones: (
            <OpcionesEVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
			/>
        )
    }
}

export const SancionesTable = () => {
    const {
        sanciones,
        handleUpdate,
        handleView
    } = useContext(SancionesContext);
    const columns = [
        {id: 'id', label: 'Id'},
        {id: 'descripcion', label: 'Descripcion'},
        {id: 'tipoSancion', label: 'Tipo Sancion'},
        {id: 'fecha', label: 'Fecha'},
        {id: 'opciones', label: 'Opciones'}
    ];

    const rows = sanciones.map((s) => (
        createData(
            s.id,
            s.descripcion,
            s.tipo_sancion,
            moment(s.fecha).format('yyyy-MM-DD'),
            () => handleUpdate(s),
            () => handleView(s.id)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
