import React from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, Paper, TextField } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';

export const DatosTutor = ({
    nivelAcademico,
    situacionAcademica,
    profesion,
    ocupacion,
    telefonoLaboral,
    handleInputChange
}) => {
    return (
        <Paper sx={{ width: '98%', padding: '1%', marginBottom:'2%' }} variant="outlined">
            <TypographyH4
                label="Datos Profesionales"
            />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        //error
                        fullWidth
                        id="nivelAcademico"
                        name="nivelAcademico"
                        value={ nivelAcademico }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Nivel Academico"
                        //helperText="Please select your currency"
                    >
                        <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
                        <MenuItem value="Primaria">Primaria</MenuItem>
                        <MenuItem value="Secundaria">Secundaria</MenuItem>
                        <MenuItem value="Terciario">Terciario</MenuItem>
                        <MenuItem value="Universitario">Universitario</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        //error
                        fullWidth
                        id="situacionAcademica"
                        name="situacionAcademica"
                        value={ situacionAcademica }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Situacion Academica"
                        //helperText="Please select your currency"
                    >
                        <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
                        <MenuItem value="Incompleto">Incompleto</MenuItem>
                        <MenuItem value="Completo">Completo</MenuItem>
                        <MenuItem value="Cursando">Cursando</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        //error
                        fullWidth
                        id="profesion"
                        name="profesion"
                        value={ profesion }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Profesion"
                        //helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        //error
                        fullWidth
                        id="ocupacion"
                        name="ocupacion"
                        value={ ocupacion }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Ocupacion"
                        //helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        //error
                        fullWidth
                        id="telefonoLaboral"
                        name="telefonoLaboral"
                        type="number"
                        value={ telefonoLaboral }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Telefono Laboral"
                        //helperText="Incorrect entry."
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

DatosTutor.propTypes = {
    nivelAcademico: PropTypes.any.isRequired,
    situacionAcademica: PropTypes.any.isRequired,
    profesion: PropTypes.any.isRequired,
    ocupacion: PropTypes.any.isRequired,
    telefonoLaboral: PropTypes.any.isRequired,
    handleInputChange: PropTypes.func.isRequired
}