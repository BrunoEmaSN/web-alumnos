import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';

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
    errors
}) => {
    
    
    const [ nivel, setNivel ] = useState( cursoNivel );
    const handleNivel = ({ target }) => {
        setNivel( target.value );
        handleInputChange({
            target: {
                name: 'cursoId',
                value: '' 
            }
        });
    }

    return (
        <Paper sx={{ width: '98%', padding: '1%', marginBottom:'2%' }} variant="outlined">
            <TypographyH4
                label="Datos Academicos"
            />
            <Grid container spacing={2}>
                <Grid item xs={ 6 }>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="nivel"
                                name="nivel"
                                onChange={ handleNivel }
                                value={ nivel }
                                InputLabelProps={{ shrink: true }}
                                select
                                margin="normal"
                                label="Nivel"
                            >
                                <MenuItem value="" disabled>Seleccione un nivel</MenuItem>
                                <MenuItem value="P">Primaria</MenuItem>
                                <MenuItem value="S">Secundaria</MenuItem>
                                <MenuItem value="T">Terciaria</MenuItem>
                                <MenuItem value="U">Universidad</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="cursoId"
                                name="cursoId"
                                value={ cursoId }
                                onChange={ handleObjectChange }
                                InputLabelProps={{ shrink: true, required: true }}
                                select
                                margin="normal"
                                label="Cursos"
                                error={Boolean(errors?.condicion)}
                                helperText={errors?.condicion}
                            >
                                <MenuItem value="" disabled>Seleccione un curso</MenuItem>
                                {   cursosList.map( c => (
                                        c.nivel === nivel && (
                                            <MenuItem key={ c.id } value={c.id}>
                                                {`${ c.turno } ${ c.grado_ano } ${ c.division }: ${ c.aula_descripcion }`}
                                            </MenuItem>
                                        )
                                    ))
                                }
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="condicion"
                                name="condicion"
                                value={ condicion }
                                onChange={ handleInputChange }
                                InputLabelProps={{ shrink: true, required: true }}
                                select
                                margin="normal"
                                label="Nivel"
                                error={Boolean(errors?.condicion)}
                                helperText={errors?.condicion}
                            >
                                <MenuItem value="" disabled>Seleccione un nivel</MenuItem>
                                <MenuItem value="Regular">Regular</MenuItem>
                                <MenuItem value="Promocional">Promocional</MenuItem>
                                <MenuItem value="Libre">Libre</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5" gutterBottom component="div">
                        Requisitos
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            id="partidaNacimiento"
                            name="partidaNacimiento"
                            checked={ partidaNacimiento }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox checked={partidaNacimiento} />}
                            size="small"
                            label="Partida de Nacimiento"
                        />
                        <FormControlLabel
                            id="fotocopiaDNI"
                            name="fotocopiaDNI"
                            checked={ fotocopiaDNI }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox checked={ fotocopiaDNI } />}
                            size="small"
                            label="Fotocopia del DNI"
                        />
                        <FormControlLabel
                            id="fotocopiaCUIL"
                            name="fotocopiaCUIL"
                            checked={ fotocopiaCUIL }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox checked={ fotocopiaCUIL } />}
                            size="small"
                            label="Fotocopia del CUIL"
                        />
                        <FormControlLabel
                            id="foto4x4"
                            name="foto4x4"
                            checked={ foto4x4 }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox checked={ foto4x4 } />}
                            size="small"
                            label="Foto 4x4"
                        />
                        <FormControlLabel
                            id="contrato"
                            name="contrato"
                            checked={ contrato }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox checked={ contrato } />}
                            size="small"
                            label="Contrato"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="observaciones"
                        name="observaciones"
                        value={ observaciones }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Observaciones"
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
    errors: PropTypes.any
}