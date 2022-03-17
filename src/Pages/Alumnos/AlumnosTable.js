import React, { useContext } from 'react'
import { Box } from '@mui/system';
import moment from 'moment';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { AlumnosContext } from '../../Context/BuildContext';
import { FaltantesList } from './Components/FaltantesList';

const createData = (
	fechaAgregado,
	nombre,
	apellido,
	tipoDocumento,
	documento,
	condicion,
	partidaNacimiento,
	fotocopiaDNI,
	fotocopiaCUIL,
	foto4x4,
	contrato,
	CallBackEdit,
	CallBackDelete
) => {
	return {
		fechaAgregado,
		nombre,
		apellido,
		tipoDocumento,
		id: documento,
		condicion,
		faltantes: (
			<FaltantesList
				partidaNacimiento={partidaNacimiento}
				fotocopiaDNI={fotocopiaDNI}
				fotocopiaCUIL={fotocopiaCUIL}
				foto4x4={foto4x4}
				contrato={contrato}
			/>
		),
		opciones: (
			<OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
		)
	}
}

export const AlumnosTable = () => {
    const {
		alumnos,
		handleEdit,
		handleDelete
	} = useContext(AlumnosContext);

    const columns = [
        { id: 'fechaAgregado', label: 'Fecha Agregado'},
        { id: 'nombre', label: 'Nombre'},
        { id: 'apellido', label: 'Apellido'},
        { id: 'tipoDocumento', label: 'Tipo Documento'},
        { id: 'id', label: 'Documento'},
        { id: 'condicion', label: 'Condicion'},
        { id: 'faltantes', label: 'Faltantes'},
        { id: 'opciones', label: 'Opciones'},
    ];

    const rows = alumnos.map((a) => (
        createData(
            moment(a.fecha_agregado).format('yyyy-MM-DD'),
            a.nombre,
            a.apellido,
            a.tipo_documento,
            a.documento,
            a.condicion,
            a.partida_nacimiento,
            a.fotocopia_dni,
            a.fotocopia_cuil,
            a.foto4x4,
            a.contrato,
            () => handleEdit(a.documento),
            () => handleDelete(a.documento)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
