import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeClase, startDeletingClase, startSetActive } from '../../Store/Clase/Actions/Clase';
import { claseModel } from '../../Utils/claseModel';

export const ClasesList = () => {
	const dispatch = useDispatch();

	const { clases } = useSelector((state) => state.clase);

	const handleCreate = () => {
		dispatch(activeClase(claseModel));
	};

	const handleEdit = (id) => {
		dispatch(startSetActive(id));
	};

	const handleDelete = (id) => {
		dispatch(startDeletingClase(id));
	};

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
