import React, { useContext } from 'react';
import { AlumnosContext } from '../../Context/BuildContext';

export const AlumnosList = () => {
	const {
		alumnos,
		handleCreate,
		handleEdit,
		handleDelete
	} = useContext(AlumnosContext);

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
