import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Paper,
	Typography,
} from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';
import { Select } from '../Components/Select/Select';
import { Input } from '../Components/Input/Input';

export const DatosAcademicos = ({
	partidaNacimiento = false,
	fotocopiaDNI = false,
	fotocopiaCUIL = false,
	foto4x4 = false,
	contrato = false,
	observaciones = '',
	cursoId = '',
	cursoNivel = '',
	condicion = '',
	cursosList = [],
	handleInputChange,
	handleCheckboxChange,
	handleObjectChange,
	errors,
}) => {
	const niveles = [
		{ label: 'Primaria', value: 'P' },
		{ label: 'Secundaria', value: 'S' },
		{ label: 'Terciaria', value: 'T' },
		{ label: 'Universidad', value: 'U' },
	];
	const condiciones = ['Regular', 'Promocional', 'Libre'];

	const [nivel, setNivel] = useState(cursoNivel);
	const handleNivel = ({ target }) => {
		setNivel(target.value);
		handleInputChange({
			target: {
				name: 'cursoId',
				value: '',
			},
		});
	};

	return (
		<Paper
			sx={{ width: '98%', padding: '1%', marginBottom: '2%' }}
			variant='outlined'
		>
			<TypographyH4 label='Datos Academicos' />
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='nivel'
								name='nivel'
								trigger={handleNivel}
								value={nivel}
								InputLabelProps={{ shrink: true }}
								margin='normal'
								label='Nivel'
								data={niveles}
							/>
						</Grid>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='cursoId'
								name='cursoId'
								value={cursoId}
								onChange={handleObjectChange}
								InputLabelProps={{ shrink: true, required: true }}
								select
								margin='normal'
								label='Cursos'
								error={errors}
								data={cursosList.map(
									(c) =>
										c.nivel === nivel && {
											label: `${c.turno} ${c.grado_ano} ${c.division}: ${c.aula_descripcion}`,
											value: c.id,
										},
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='condicion'
								name='condicion'
								value={condicion}
								onChange={handleInputChange}
								InputLabelProps={{ shrink: true, required: true }}
								margin='normal'
								label='Condicion'
								error={errors}
								data={condiciones.map((c) => ({ label: c, value: c }))}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h5' gutterBottom component='div'>
						Requisitos
					</Typography>
					<FormGroup>
						<FormControlLabel
							id='partidaNacimiento'
							name='partidaNacimiento'
							checked={partidaNacimiento}
							onChange={handleCheckboxChange}
							control={<Checkbox checked={partidaNacimiento} />}
							size='small'
							label='Partida de Nacimiento'
						/>
						<FormControlLabel
							id='fotocopiaDNI'
							name='fotocopiaDNI'
							checked={fotocopiaDNI}
							onChange={handleCheckboxChange}
							control={<Checkbox checked={fotocopiaDNI} />}
							size='small'
							label='Fotocopia del DNI'
						/>
						<FormControlLabel
							id='fotocopiaCUIL'
							name='fotocopiaCUIL'
							checked={fotocopiaCUIL}
							onChange={handleCheckboxChange}
							control={<Checkbox checked={fotocopiaCUIL} />}
							size='small'
							label='Fotocopia del CUIL'
						/>
						<FormControlLabel
							id='foto4x4'
							name='foto4x4'
							checked={foto4x4}
							onChange={handleCheckboxChange}
							control={<Checkbox checked={foto4x4} />}
							size='small'
							label='Foto 4x4'
						/>
						<FormControlLabel
							id='contrato'
							name='contrato'
							checked={contrato}
							onChange={handleCheckboxChange}
							control={<Checkbox checked={contrato} />}
							size='small'
							label='Contrato'
						/>
					</FormGroup>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Input
						fullWidth
						id='observaciones'
						name='observaciones'
						value={observaciones}
						onChange={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						margin='normal'
						label='Observaciones'
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

DatosAcademicos.propTypes = {
	partidaNacimiento: PropTypes.bool.isRequired,
	fotocopiaDNI: PropTypes.bool.isRequired,
	fotocopiaCUIL: PropTypes.bool.isRequired,
	foto4x4: PropTypes.bool.isRequired,
	contrato: PropTypes.bool.isRequired,
	observaciones: PropTypes.string,
	cursoId: PropTypes.any.isRequired,
	cursoNivel: PropTypes.any.isRequired,
	condicion: PropTypes.any.isRequired,
	cursosList: PropTypes.array.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired,
	handleObjectChange: PropTypes.func.isRequired,
	errors: PropTypes.any,
};
