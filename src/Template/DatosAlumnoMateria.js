import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { materiasGetAll } from '../Services/restCallMaterias';
import { customStyles } from '../Utils/modalStyles';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CardGeneric } from '../Components/Card/CardGeneric';
import {
	ButtonContained,
	ButtonOutlined,
	TypographyH4,
} from '../Components/GlobalStylesComponents/stylesComponents';
import { Select } from '../Components/Select/Select';

export const DatosAlumnoMateria = ({ materias, handleInputChange }) => {
	const estados = [
		{ label: 'Regular', value: 'regular' },
		{ label: 'Libre', value: 'libre' },
		{ label: 'Promocional', value: 'promocional' },
	];

	const [materia, setMateria] = useState('');

	const [materiasList, setMateriasList] = useState([]);

	const [estado, setEstado] = useState('');

	const [modalMateriaIsOpen, setmodalMateriaIsOpen] = useState(false);

	const handleMateriasGetAll = async () => {
		setMateriasList(await materiasGetAll());
	};

	useEffect(() => {
		handleMateriasGetAll();
	}, []);

	const openModalMateria = () => {
		setmodalMateriaIsOpen(true);
	};

	const closeModalMateria = () => {
		setmodalMateriaIsOpen(false);
	};

	const handleChageMateria = ({ target }) => {
		setMateria(JSON.parse(target.value));
	};

	const handleEstado = ({ target }) => {
		setEstado(target.value);
	};

	const handleAddMateria = () => {
		const isExist = materias.find((m) => m.id === parseInt(materia.id));
		setMateria('');
		setEstado('');

		if (isExist) {
			closeModalMateria();
			return console.log('materia ya asignada al alumno');
		}

		handleInputChange({
			target: {
				name: 'materias',
				value: [...materias, { ...materia, estado }],
			},
		});

		closeModalMateria();
	};

	const removeMateria = (idMateria) => {
		const filterMaterias = materias.filter(
            (m) => m.id !== parseInt(idMateria)
        );
		handleInputChange({
			target: {
				name: 'materias',
				value: [...filterMaterias],
			},
		});
	};

	return (
		<Box>
			<Paper
				sx={{ width: '98%', padding: '1%', marginBottom: '2%' }}
				variant='outlined'
			>
				<Box
					sx={{
						display: 'flex',
						'& > :not(style)': {
							m: 1,
						},
					}}
				>
					<TypographyH4 label='Materias' />
					<Button onClick={openModalMateria}>Agregar Materia</Button>
				</Box>
				<Box
					id='materias'
					name='materias'
					sx={{
						display: 'flex',
						minHeight: '140px',
						border: '1px solid black',
						borderRadius: '4px',
						'& > :not(style)': {
							m: 1,
						},
					}}
				>
					{materias &&
						materias.map((m) => (
							<CardGeneric
								key={m.id}
								titulo={m.descripcion}
								descripcion={m.estado}
								id={m.id}
								removeCard={removeMateria}
							/>
						))}
				</Box>
			</Paper>
			<Modal
				open={modalMateriaIsOpen}
				onClose={closeModalMateria}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={customStyles}>
					<Typography variant='h6' gutterBottom component='div'>
						Materias
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='materias'
								name='materia'
								value={
                                    materia !== ''
                                    ? JSON.stringify(materia)
                                    : ''
                                }
								trigger={handleChageMateria}
								InputLabelProps={{
                                    shrink: true,
                                    required: true
                                }}
								margin='normal'
								label='Materia'
								data={materiasList.map((m) => ({
									label: m.descripcion,
									value: JSON.stringify(m),
								}))}
							/>
						</Grid>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='estado'
								name='estado'
								value={estado}
								trigger={handleEstado}
								InputLabelProps={{
                                    shrink: true, required: true
                                }}
								margin='normal'
								label='Estado'
								data={estados}
							/>
						</Grid>
						<Grid item xs={12}>
							<ButtonContained
                                CallBack={handleAddMateria}
                                label='Agregar'
                            />
						</Grid>
						<Grid item xs={12} sx={{ marginTop: '2%' }}>
							<ButtonOutlined
                                CallBack={closeModalMateria}
                                label='Close'
                            />
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
};

DatosAlumnoMateria.propTypes = {
	materias: PropTypes.array.isRequired,
	handleInputChange: PropTypes.func.isRequired,
};
