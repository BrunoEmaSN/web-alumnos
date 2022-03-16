import React, { useContext } from 'react';
import { ClasesContext } from '../../Context/BuildContext';

export const ClasesList = () => {
	const {
		clases,
		handleCreate,
		handleEdit,
		handleDelete
	} = useContext(ClasesContext);

	return (
		<div>
			<h1>clasesList</h1>
			<button onClick={handleCreate}>Save</button>
			{clases.map((c) => (
				c.estado !== 0 && (
					<div key={c.id}>
						{`${c.id} ${c.materia_descripcion} ${c.dias} ${c.horario_inicio} ${c.horario_fin} ${ c.periodo_descripcion }`}
						<button
							onClick={() => {
								handleEdit(c.id);
							}}
						>
							Edit
						</button>
						<button
							onClick={() => {
								handleDelete(c.id);
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
