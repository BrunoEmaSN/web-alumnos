import React, { useContext } from 'react';
import moment from 'moment';
import { Box } from '@mui/system';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { DocentesContext } from '../../Context/BuildContext';
import { OptionsERVButtons } from '../../Components/OptionesButtons/OptionsERVButtons';
import { ContratosList } from './Components/ContratosList';

const createData = (
    fechaAgregado,
	nombre,
	apellido,
	tipoDocumento,
	documento,
    sede,
    titulo,
    subencionado,
    contratado,
    monotributista,
    CallBackEdit,
    CallBackView,
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
        contratos: (
            <ContratosList
                subencionado={subencionado}
                contratado={contratado}
                monotributista={monotributista}
            />
        ),
        opciones: (
            <OptionsERVButtons
				CallBackEdit={CallBackEdit}
                CallBackView={CallBackView}
				CallBackDelete={CallBackDelete}
			/>
        )
    }
}

export const DocentesTable = () => {
    const {
        docentes,
        handleEdit,
        handleView,
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
        { id: 'contratos', label: 'Contratos'},
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
            d.subencionado,
            d.contratado,
            d.monotributista,
            () => handleEdit(d.documento),
            () => handleView(d.documento),
            () => handleDelete(d.documento)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
