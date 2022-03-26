import React from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, Paper, TextField } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';

export const DatosPersonales = ({
    nombre = '',
    apellido = '',
    tipoDocumento = '',
    documento = '',
    fechaNacimiento = '',
    sexo = '',
    lugarNacimiento = '',
    telefonoFijo = '',
    telefonoMovil = '',
    domicilio = '',
    numero = '',
    departamento = '',
    piso = '',
    handleInputChange,
    errors
}) => {

    return (
        <Paper sx={{ width: '98%', padding: '1%', marginBottom:'2%' }} variant="outlined">
            <TypographyH4
                label="Datos Personales"
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="nombre"
                        name="nombre"
                        value={ nombre }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Nombre"
                        error={Boolean(errors?.nombre)}
                        helperText={errors?.nombre}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="apellido"
                        name="apellido"
                        value={ apellido }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Apellido"
                        error={Boolean(errors?.apellido)}
                        helperText={errors?.apellido}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="tipoDocumento"
                        name="tipoDocumento"
                        value={ tipoDocumento }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Tipo de Documento"
                        error={Boolean(errors?.tipoDocumento)}
                        helperText={errors?.tipoDocumento}
                    >
                        <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
                        <MenuItem value="DNI">DNI</MenuItem>
                        <MenuItem value="CUIL">CUIL</MenuItem>
                        <MenuItem value="LE">Libreta Enrolamiento</MenuItem>
                        <MenuItem value="LC">Libreta Civica</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="documento"
                        name="documento"
                        type="number"
                        value={ documento }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Documento"
                        error={Boolean(errors?.documento)}
                        helperText={errors?.documento}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        type="date"
                        value={ fechaNacimiento }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Fecha Nacimiento"
                        error={Boolean(errors?.fechaNacimiento)}
                        helperText={errors?.fechaNacimiento}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="sexo"
                        name="sexo"
                        value={ sexo }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Sexo"
                        error={Boolean(errors?.sexo)}
                        helperText={errors?.sexo}
                    >
                        <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Femenino</MenuItem>
                        <MenuItem value="Otros">Otros</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="lugarNacimiento"
                        name="lugarNacimiento"
                        value={ lugarNacimiento }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Lugar de Nacimiento"
                        error={Boolean(errors?.lugarNacimiento)}
                        helperText={errors?.lugarNacimiento}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="telefonoFijo"
                        name="telefonoFijo"
                        type="number"
                        value={ telefonoFijo }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Telefono Fijo"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="telefonoMovil"
                        name="telefonoMovil"
                        type="number"
                        value={ telefonoMovil }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Telefono Movil"
                    />
                </Grid>
            </Grid>
            <Grid contaienr>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="domicilio"
                        name="domicilio"
                        value={ domicilio }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Domicilio"
                        error={Boolean(errors?.domicilio)}
                        helperText={errors?.domicilio}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="numero"
                        name="numero"
                        type="number"
                        value={ numero }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Numero"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="departamento"
                        name="departamento"
                        value={ departamento }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Departamento"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="piso"
                        name="piso"
                        type="number"
                        value={ piso }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Piso"
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

DatosPersonales.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    tipoDocumento: PropTypes.string.isRequired,
    documento: PropTypes.any.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    lugarNacimiento: PropTypes.string.isRequired,
    telefonoFijo: PropTypes.any.isRequired,
    telefonoMovil: PropTypes.any.isRequired,

    domicilio: PropTypes.string.isRequired,
    numero: PropTypes.any.isRequired,
    departamento: PropTypes.any.isRequired,
    piso: PropTypes.any.isRequired,
    
    handleInputChange: PropTypes.func.isRequired,
    errors: PropTypes.any
}