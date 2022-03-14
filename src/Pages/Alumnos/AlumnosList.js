import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	startSetActive,
	startDeletingAlumno,
	activeAlumno,
} from '../../Store/Alumno/Actions/Alumno';
import { alumnoModel } from '../../Utils/alumnoModel';

export const AlumnosList = () => {
	const dispatch = useDispatch();

	const { alumnos } = useSelector((state) => state.alumno);

	const handleCreate = () => {
		dispatch(activeAlumno(alumnoModel));
	};

	const handleEdit = (documento) => {
		dispatch(startSetActive(documento));
	};

	const handleDelete = (documento) => {
		dispatch(startDeletingAlumno(documento));
	};

	return (
		<div>
			<h1>AlumnosList</h1>
			<button onClick={handleCreate}>Save</button>
			{alumnos.map((a) => (
				a.estado !== 0 && (
					<div key={a.documento}>
						{`${ a.documento } ${a.nombre} ${a.apellido}`}
						<button
							onClick={() => {
								handleEdit(a.documento);
							}}
						>
							Edit
						</button>
						<button
							onClick={() => {
								handleDelete(a.documento);
							}}
						>
							Delete
						</button>
					</div>
				)
			))}
		</div>
	);
};
