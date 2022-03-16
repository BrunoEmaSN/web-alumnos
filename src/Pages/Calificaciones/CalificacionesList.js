import React, { useContext } from 'react';
import { CalificacionesContext } from '../../Context/BuildContext';

export const CalificacionesList = () => {
	const {
		calificaciones,
		handleEdit
	} = useContext(CalificacionesContext);

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
