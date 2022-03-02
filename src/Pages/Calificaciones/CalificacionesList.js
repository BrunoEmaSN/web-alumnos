import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeCalificacion, startDeletingCalificacion } from '../../Store/Calificacion/Actions/Calificacion';
import { calificacionModel } from '../../Utils/calificacionModel';

export const CalificacionesList = () => {
	const dispatch = useDispatch();

	const { calificaciones } = useSelector((state) => state.calificacion);

	const handleCreate = () => {
		const lastIndex = calificaciones.length - 1;
        const lastId = calificaciones[lastIndex].id;
        calificacionModel.id = lastId + 1;
		dispatch(activeCalificacion(calificacionModel));
	};

	const handleEdit = (c) => {
		dispatch(activeCalificacion(c));
	};

	const handleDelete = (id) => {
		dispatch(startDeletingCalificacion(id));
	};

	return (
		<div>
			<h1>CalificacionesList</h1>
			<button onClick={handleCreate}>Save</button>
			{calificaciones.map((c) => (
				<div key={c.id}>
					{`${c.id} ${c.descripcion} ${c.regimen} ${c.etapa}`}
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
