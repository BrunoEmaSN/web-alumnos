import React, { useContext } from 'react';
import moment from 'moment';
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { DocentesContext } from '../../Context/BuildContext';

const createData = (
    fechaAgregado,
	nombre,
	apellido,
	tipoDocumento,
	documento,
    sede,
    titulo,
    cuit,
    subencionado,
    contratado,
    monotributista,
    CallBackEdit,
    CallBackDelete
) => {
    return {
        fechaAgregado,
        nombre,
        apellido,
        tipoDocumento,
        id: documento,
        sede,
        titulo,
        cuit,
        subencionado,
        contratado,
        monotributista,
        opciones: (
            <OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const DocentesTable = () => {
    const {
        docentes,
        handleEdit,
        handleDelete
    } = useContext(DocentesContext);

    const columns = [
        { id: 'fechaAgregado', label: 'Fecha Agregado'},
        { id: 'nombre', label: 'Nombre'},
        { id: 'apellido', label: 'Apellido'},
        { id: 'tipoDocumento', label: 'Tipo Documento'},
        { id: 'id', label: 'Documento'},
        { id: 'sede', label: 'Sede'},
        { id: 'titulo', label: 'Titulo'},
        { id: 'cuit', label: 'CUIT'},
        { id: 'subencionado', label: 'Subencionado'},
        { id: 'contratado', label: 'Contratado'},
        { id: 'monotributista', label: 'Monotributista'},
        { id: 'opciones', label: 'Opciones'}
    ];

    const rows = docentes.map((d) => (
        createData(
            moment(d.fecha_agregado).format('yyyy-MM-DD'),
            d.nombre,
            d.apellido,
            d.tipo_documento,
            d.documento,
            d.sede,
            d.titulo,
            d.cuit,
            d.subencionado,
            d.contratado,
            d.monotributista,
            () => handleEdit(d.documento),
            () => handleDelete(d.documento)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
