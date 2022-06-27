import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';
import { Input } from '../Components/Input/Input';
import { Select } from '../Components/Select/Select';

export const DatosTutor = ({
	nivelAcademico,
	situacionAcademica,
	profesion,
	ocupacion,
	telefonoLaboral,
	handleInputChange,
}) => {
	const nivelesAcademicos = [
		'Primaria',
		'Secundaria',
		'Terciaria',
		'Universidad',
	];
	const situacionesAcademicas = ['Completo', 'Incompleto', 'Cursando'];
	return (
		<Paper
			sx={{ width: '98%', padding: '1%', marginBottom: '2%' }}
			variant='outlined'
		>
			<TypographyH4 label='Datos Profesionales' />
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Select
						fullWidth
						id='nivelAcademico'
						name='nivelAcademico'
						value={nivelAcademico}
						trigger={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						select
						margin='normal'
						label='Nivel Academico'
						data={nivelesAcademicos.map((n) => ({
							label: n,
							value: n,
						}))}
					/>
				</Grid>
				<Grid item xs={3}>
					<Select
						fullWidth
						id='situacionAcademica'
						name='situacionAcademica'
						value={situacionAcademica}
						trigger={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						select
						margin='normal'
						label='Situacion Academica'
                        data={situacionesAcademicas.map(s => ({
                            label: s, value: s
                        }))}
					/>
				</Grid>
				<Grid item xs={6}>
                    <Input
                        fullWidth
						id='profesion'
						name='profesion'
						value={profesion}
						trigger={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						margin='normal'
						label='Profesion'
                    />
				</Grid>
				<Grid item xs={6}>
                    <Input
                        fullWidth
						id='ocupacion'
						name='ocupacion'
						value={ocupacion}
						trigger={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						margin='normal'
						label='Ocupacion'
                    />
				</Grid>
				<Grid item xs={6}>
                    <Input
                        fullWidth
						id='telefonoLaboral'
						name='telefonoLaboral'
						type='number'
						value={telefonoLaboral}
						trigger={handleInputChange}
						InputLabelProps={{ shrink: true, required: true }}
						margin='normal'
						label='Telefono Laboral'
                    />
				</Grid>
			</Grid>
		</Paper>
	);
};

DatosTutor.propTypes = {
	nivelAcademico: PropTypes.any.isRequired,
	situacionAcademica: PropTypes.any.isRequired,
	profesion: PropTypes.any.isRequired,
	ocupacion: PropTypes.any.isRequired,
	telefonoLaboral: PropTypes.any.isRequired,
	handleInputChange: PropTypes.func.isRequired,
};
