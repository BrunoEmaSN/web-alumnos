import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Grid,
	Typography,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import { useForm } from '../Hooks/useForm';
import { periodosAdd } from '../Services/restCallPeriodos';
import { customStyles } from '../Utils/modalStyles';
import {
	ButtonContained,
	ButtonOutlined,
} from '../Components/GlobalStylesComponents/stylesComponents';
import { Input } from '../Components/Input/Input';
import { Select } from '../Components/Select/Select';

const initialState = {
	descripcionPeriodo: '',
	fechaInicio: '',
	fechaFin: '',
	tipoPeriodo: '',
};

export const AgregarPeriodos = ({ isOpenModal, openModal, closeModal }) => {
	const [formValues, handleInputChange, , , , setValues] =
		useForm(initialState);
	const { descripcionPeriodo, fechaInicio, fechaFin, tipoPeriodo } = formValues;

	const handleAddPeriodo = async () => {
		await periodosAdd(formValues);
		setValues(initialState);
		closeModal();
	};
	const tiposPeriodos = [
		{ label: 'Ciclo Lectivo', value: 'CicloLectivo' },
		{ label: 'Mesa', value: 'Mesa' },
	];

	return (
		<Box>
			<Button
				fullWidth
				onClick={openModal}
				sx={{ padding: '0 2%', height: 50 }}
			>
				Agregar Periodo
			</Button>
			<Modal
				open={isOpenModal}
				onClose={closeModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={customStyles}>
					<Typography variant='h6' gutterBottom component='div'>
						Agregar Periodo
					</Typography>
					<Grid container>
						<Grid item xs={12}>
							<Input
								fullWidth
								id='descripcionPeriodo'
								name='descripcionPeriodo'
								value={descripcionPeriodo}
								onChange={handleInputChange}
								InputLabelProps={{ shrink: true, required: true }}
								margin='normal'
								label='Descripcion'
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								fullWidth
								id='fechaInicio'
								name='fechaInicio'
								value={fechaInicio}
								type='date'
								onChange={handleInputChange}
								InputLabelProps={{ shrink: true, required: true }}
								margin='normal'
								label='Fecha Inicio'
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								fullWidth
								id='fechaFin'
								name='fechaFin'
								value={fechaFin}
								type='date'
								onChange={handleInputChange}
								InputLabelProps={{ shrink: true, required: true }}
								margin='normal'
								label='Fecha Fin'
							/>
						</Grid>
						<Grid item xs={12}>
							<Select
								fullWidth
								id='tipoPeriodo'
								name='tipoPeriodo'
								value={tipoPeriodo}
								onChange={handleInputChange}
								InputLabelProps={{ shrink: true, required: true }}
								select
								margin='normal'
								label='Tipo'
                                data={tiposPeriodos}
							/>
						</Grid>
						<Grid item xs={12}>
							<ButtonContained CallBack={handleAddPeriodo} label='Agregar' />
						</Grid>
						<Grid item xs={12}>
							<ButtonOutlined CallBack={closeModal} label='Cerrar' />
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Box>
	);
};

AgregarPeriodos.propTypes = {
	isOpenModal: PropTypes.bool.isRequired,
	openModal: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
};
