import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import { Grid, Paper, TextField } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';

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
        <Paper sx={{ width: '98%', padding: '1%', marginBottom:'2%' }} variant="outlined">
            <TypographyH4
                label="Datos Pareja"
            />
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
    );
};

DatosPareja.propTypes = {
    tienePareja: PropTypes.bool.isRequired,
    pareja: PropTypes.any.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}