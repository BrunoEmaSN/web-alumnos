import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import { Grid, Paper, TextField, Typography } from '@mui/material';

export const DatosPareja = ({
    tienePareja,
    pareja,
    handleInputChange
}) => {

    const [ checked, setchecked ] = useState( tienePareja );

    const {
        nombrePareja = '',
        apellidoPareja = '',
        dniPareja = '',
        telefonoFijoPareja = '',
        telefonoMovilPareja = '',
    } = pareja;

    const handleChange = () => {
        handleInputChange({
            target: {
                name: 'tienePareja',
                value: !checked
            } 
        });
        setchecked( !checked );
    }

    const handleParejaChange = ({ target }) => {
        handleInputChange({
            target: {
                name: 'pareja',
                value: {
                    ...pareja,
                    [target.name]: target.value
                }
            } 
        });
    }

    return (
        <div>
            <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
                <Typography variant="h4" gutterBottom component="div">
                    Datos Pareja
                </Typography>
                <div>
                    <Switch checked={ checked } onChange={ handleChange }/>
                    <label htmlFor="tienePareja">tiene pareja?</label>
                </div>
                <Grid container spacing={2} sx={ checked ? { display: 'flex' } : { display: 'none' }}>
                    <Grid item xs={6}>
                        <TextField
                            //error
                            fullWidth
                            id="nombrePareja"
                            name="nombrePareja"
                            value={ nombrePareja }
                            onChange={ handleParejaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Nombre Pareja"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            //error
                            fullWidth
                            id="apellidoPareja"
                            name="apellidoPareja"
                            value={ apellidoPareja }
                            onChange={ handleParejaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Apellido Pareja"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            //error
                            fullWidth
                            type="number"
                            id="dniPareja"
                            name="dniPareja"
                            value={ dniPareja }
                            onChange={ handleParejaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="DNI Pareja"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            //error
                            fullWidth
                            type="number"
                            id="telefonoFijoPareja"
                            name="telefonoFijoPareja"
                            value={ telefonoFijoPareja }
                            onChange={ handleParejaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Telefono Fijo Pareja"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            //error
                            fullWidth
                            type="number"
                            id="telefonoMovilPareja"
                            name="telefonoMovilPareja"
                            value={ telefonoMovilPareja }
                            onChange={ handleParejaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Telefono Movil Pareja"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

DatosPareja.propTypes = {
    tienePareja: PropTypes.bool.isRequired,
    pareja: PropTypes.any.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}