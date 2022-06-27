import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@mui/material';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';
import { Input } from '../Components/Input/Input';
import { Select } from '../Components/Select/Select';

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
    const sexos = ['Masculino', 'Femenino', 'Otro'];
    const tiposDocumentos = [
        {label: 'DNI', value: 'DNI'},
        {label: 'CUIL', value: 'CUIL'},
        {label: 'Libreta Enrolamiento', value: 'LE'},
        {label: 'Libreta Civica', value: 'LC'}
    ];
    
    return (
        <Paper sx={{ width: '98%', padding: '1%', marginBottom:'2%' }} variant="outlined">
            <TypographyH4
                label="Datos Personales"
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Input
                        fullWidth
                        id="nombre"
                        name="nombre"
                        value={ nombre }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Nombre"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        fullWidth
                        id="apellido"
                        name="apellido"
                        value={ apellido }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Apellido"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Select
                        fullWidth
                        id="tipoDocumento"
                        name="tipoDocumento"
                        value={ tipoDocumento }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Tipo de Documento"
                        error={errors}
                        data={tiposDocumentos}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Input
                        fullWidth
                        id="documento"
                        name="documento"
                        type="number"
                        value={ documento }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Documento"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Input
                        fullWidth
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        type="date"
                        value={ fechaNacimiento }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Fecha Nacimiento"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Select
                        fullWidth
                        id="sexo"
                        name="sexo"
                        value={ sexo }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Sexo"
                        error={errors}
                        data={(sexos.map(s => ({label: s, value: s})))}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        fullWidth
                        id="lugarNacimiento"
                        name="lugarNacimiento"
                        value={ lugarNacimiento }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Lugar de Nacimiento"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Input
                        fullWidth
                        id="telefonoFijo"
                        name="telefonoFijo"
                        type="number"
                        value={ telefonoFijo }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Telefono Fijo"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        fullWidth
                        id="telefonoMovil"
                        name="telefonoMovil"
                        type="number"
                        value={ telefonoMovil }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Telefono Movil"
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Input
                        fullWidth
                        id="domicilio"
                        name="domicilio"
                        value={ domicilio }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Domicilio"
                        margin="normal"
                        error={errors}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Input
                        fullWidth
                        id="numero"
                        name="numero"
                        type="number"
                        value={ numero }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Numero"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        fullWidth
                        id="departamento"
                        name="departamento"
                        value={ departamento }
                        trigger={ handleInputChange }
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        label="Departamento"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Input
                        fullWidth
                        id="piso"
                        name="piso"
                        type="number"
                        value={ piso }
                        trigger={ handleInputChange }
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