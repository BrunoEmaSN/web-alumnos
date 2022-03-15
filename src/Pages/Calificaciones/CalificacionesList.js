import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeCalificacion } from '../../Store/Calificacion/Actions/Calificacion';

export const CalificacionesList = () => {
	const dispatch = useDispatch();

	const { calificaciones } = useSelector((state) => state.calificacion);

	const handleEdit = (c) => {
		dispatch(activeCalificacion(c));
	};

	return (
		<div>
			<h1>CalificacionesList</h1>
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
				</div>
			))}
		</div>
	);
};
