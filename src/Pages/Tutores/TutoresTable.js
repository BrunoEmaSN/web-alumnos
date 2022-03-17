import React, { useContext } from 'react'
import { Box } from '@mui/system';
import { OpcionesERVButtons } from '../../Components/OptionesButtons/OptionesERVButtons';
import { TableGeneric } from '../../Components/Table/TableGeneric';
import { TutoresContext } from '../../Context/BuildContext';

const createData = (
	nombre,
	apellido,
	tipoDocumento,
	documento,
    nivelAcademico,
    situacionAcademica,
    profesion,
    ocupacion,
	CallBackEdit,
	CallBackDelete
) => {
	return {
		nombre,
		apellido,
		tipoDocumento,
		id: documento,
        nivelAcademico,
        situacionAcademica,
        profesion,
        ocupacion,
		opciones: (
			<OpcionesERVButtons
				CallBackEdit={CallBackEdit}
				CallBackDelete={CallBackDelete}
			/>
		)
	}
}

export const TutoresTable = () => {
    const {
        tutores,
        handleEdit,
        handleDelete
    } = useContext(TutoresContext);
    const columns = [
        { id: 'nombre', label: 'Nombre'},
        { id: 'apellido', label: 'Apellido'},
        { id: 'tipoDocumento', label: 'Tipo Documento'},
        { id: 'id', label: 'Documento'},
        { id: 'nivelAcademico', label: 'Nivel Academico'},
        { id: 'situacionAcademica', label: 'Situacion Academica'},
        { id: 'profesion', label: 'Profesion'},
        { id: 'ocupacion', label: 'Ocupacion'},
        { id: 'opciones', label: 'Opciones'},
    ];

    const rows = tutores.map((t) => (
        createData(
            t.nombre,
            t.apellido,
            t.tipo_documento,
            t.documento,
            t.nivel_academico,
            t.situacion_academica,
            t.profesion,
            t.ocupacion,
            () => handleEdit(t.documento),
            () => handleDelete(t.documento)
        )
    ));

    return (
        <Box>
            <TableGeneric columns={ columns } rows={ rows } />
        </Box>
    )
}
