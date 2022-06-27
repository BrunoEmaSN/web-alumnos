import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { tutoresGetOne } from '../Services/restCallTutores';
import { customStyles } from '../Utils/modalStyles';
import { tutorFormatter } from '../Utils/Model/tutorModel';
import { CardGeneric } from '../Components/Card/CardGeneric';
import { Box } from '@mui/system';
import { Button, Grid, Paper, Typography } from '@mui/material';
import {
	TypographyH4,
	ButtonContained,
	ButtonOutlined,
} from '../Components/GlobalStylesComponents/stylesComponents';
import {Input} from '../Components/Input/Input';

export const DatosAlumnoTutores = ({ tutores, handleInputChange }) => {
	const [documentoTutor, setDocumentoTutor] = useState('');

	const [tutor, setTutor] = useState(null);

	const [parentesco, setParentesco] = useState('');

	const [modalTutorIsOpen, setModalTutorIsOpen] = useState(false);

	const openModalTutor = () => {
		setModalTutorIsOpen(true);
	};

	const closeModalTutor = () => {
		setModalTutorIsOpen(false);
	};

	const handleDocumentoTutor = ({ target }) => {
		setDocumentoTutor(target.value);
	};

	const findTutor = async () => {
		const result = await tutoresGetOne(parseInt(documentoTutor));
		setTutor(tutorFormatter(result));
	};

	const handleParentesco = ({ target }) => {
		setParentesco(target.value);
	};

	const handleAddTutor = async () => {
		const isExist = tutores.find(
			(t) => t.documento === parseInt(tutor.documento),
		);
		setParentesco('');
		setDocumentoTutor('');

		if (isExist) {
			closeModalTutor();
			return console.log('tutor ya asignado al alumno');
		}

		handleInputChange({
			target: {
				name: 'tutores',
				value: [...tutores, { ...tutor, parentesco }],
			},
		});

		closeModalTutor();
	};

	const removeTutor = (documentoT) => {
		const filterTutores = tutores.filter(
			(t) => t.documento !== parseInt(documentoT),
		);
		handleInputChange({
			target: {
				name: 'tutores',
				value: [...filterTutores],
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
					<TypographyH4 label='Tutores' />
					<Button onClick={openModalTutor}>Agregar Tutor</Button>
				</Box>
				<Box
					id='tutores'
					name='tutores'
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
					{tutores &&
						tutores.map((t) => (
							<CardGeneric
								key={t.documento}
								titulo={t.parentesco}
								descripcion={`${t.nombre} ${t.apellido}`}
								id={t.documento}
								removeCard={removeTutor}
							/>
						))}
				</Box>
			</Paper>
			<Modal
				open={modalTutorIsOpen}
				onClose={closeModalTutor}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={customStyles}>
					<Typography variant='h6' gutterBottom component='div'>
						Tutores
					</Typography>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={8}>
                            <Input
                                fullWidth
								type='number'
								name='documentoTutor'
								value={documentoTutor}
								trigger={handleDocumentoTutor}
								InputLabelProps={{
                                    shrink: true,
                                    required: true
                                }}
								margin='normal'
								label='Documento'
								size='small'
                            />
						</Grid>
						<Grid item xs={4}>
							<ButtonContained CallBack={findTutor} label='Buscar' />
						</Grid>
						<Grid item xs={12}>
							{tutor && (
								<Typography variant='h6'>
									{`${tutor.nombre} ${tutor.apellido}`}
								</Typography>
							)}
						</Grid>
						<Grid item xs={12}>
                            <Input
                                fullWidth
								name='parentesco'
								value={parentesco}
								trigger={handleParentesco}
								InputLabelProps={{ shrink: true, required: true }}
								margin='normal'
								label='Parentesco'
								size='small'
                            />
						</Grid>
						<Grid item xs={12}>
							<ButtonContained CallBack={handleAddTutor} label='Agregar' />
						</Grid>
						<Grid item xs={12} sx={{ marginTop: '2%' }}>
							<ButtonOutlined CallBack={closeModalTutor} label='Cerrar' />
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
};

DatosAlumnoTutores.propTypes = {
	tutores: PropTypes.array.isRequired,
	handleInputChange: PropTypes.func.isRequired,
};
