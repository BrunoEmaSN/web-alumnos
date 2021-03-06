import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from '@mui/material';

export const DatosDocente = ({
    cuit,
    titulo,
    sede,
    subencionado,
    contratado,
    monotributista,
    observaciones,
    handleInputChange,
    handleCheckboxChange,
    errors
}) => {
    return (
        <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
            <Typography variant="h4" gutterBottom component="div">
                Datos Profecionales
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="number"
                                name="cuit"
                                id="cuit"
                                value={ cuit }
                                onChange={ handleInputChange }
                                InputLabelProps={{ shrink: true, required: true }}
                                margin="normal"
                                label="CUIT"
                                error={Boolean(errors?.cuit)}
                                helperText={errors?.cuit}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="titulo"
                                id="titulo"
                                value={ titulo }
                                onChange={ handleInputChange }
                                InputLabelProps={{ shrink: true, required: true }}
                                margin="normal"
                                label="Titulo"
                                error={Boolean(errors?.titulo)}
                                helperText={errors?.titulo}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="sede"
                                id="sede"
                                value={ sede }
                                onChange={ handleInputChange }
                                InputLabelProps={{ shrink: true }}
                                margin="normal"
                                label="Sede"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom component="div">
                        Contratos
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            name="subencionado"
                            id="subencionado"
                            checked={ subencionado }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox defaultChecked />}
                            size="small"
                            label="Subencionado"
                        />
                        <FormControlLabel
                            name="contratado"
                            id="contratado"
                            checked={ contratado }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox defaultChecked />}
                            size="small"
                            label="Contratado"
                        />
                        <FormControlLabel
                            name="monotributista"
                            id="monotributista"
                            checked={ monotributista }
                            onChange={ handleCheckboxChange }
                            control={<Checkbox defaultChecked />}
                            size="small"
                            label="Monitributista"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="observaciones"
                        id="observaciones"
                        value={ observaciones }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Observaciones"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

DatosDocente.propTypes = {
    cuit: PropTypes.any.isRequired,
    titulo: PropTypes.string.isRequired,
    sede: PropTypes.string.isRequired,
    subencionado: PropTypes.bool.isRequired,
    contratado: PropTypes.bool.isRequired,
    monotributista: PropTypes.bool.isRequired,
    observaciones: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    errors: PropTypes.any
}