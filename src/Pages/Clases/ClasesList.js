import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeClase, startDeletingClase } from '../../Store/Clase/Actions/Clase';
import { claseModel } from '../../Utils/claseModel';

export const ClasesList = () => {
	const dispatch = useDispatch();

	const { clases } = useSelector((state) => state.clase);

	const handleCreate = () => {
		const lastIndex = clases.length - 1;
        const lastId = clases[lastIndex].id;
        claseModel.id = lastId + 1;
		dispatch(activeClase(claseModel));
	};

	const handleEdit = (c) => {
		dispatch(activeClase(c));
	};

	const handleDelete = (id) => {
		dispatch(startDeletingClase(id));
	};

	return (
		<div>
			<h1>clasesList</h1>
			<button onClick={handleCreate}>Save</button>
			{clases.map((c) => (
				<div key={c.id}>
					{`${c.id} ${c.materia.descripcion} ${c.dias} ${c.horarioInicio} ${c.horarioFin}`}
					<button
						onClick={() => {
							handleEdit(c);
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
			))}
		</div>
	);
};
