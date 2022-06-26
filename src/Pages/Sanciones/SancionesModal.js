import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { alumnosGetAll } from '../../Services/restCallAlumnos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { useForm } from '../../Hooks/useForm';
import { customStyles } from '../../Utils/modalStyles';
import { tiposSanciones } from '../../Utils/Model/sancionModel';
import { SancionesContext } from '../../Context/BuildContext';
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';

export const SancionModal = ({ isOpenModal, closeModal }) => {
    const {
        active,
        handleEditSancion,
        errors,
        resetErrors
    } = useContext(SancionesContext);

    const [ alumnosList, setAlumnosList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        alumno,
        docente,
        tipoSancion,
        descripcion,
        fecha
    } = formValues;

    const handleListGetAll = async () => {
        setAlumnosList( await alumnosGetAll() );
        setDocentesList( await docentesGetAll() );
    }

    useEffect(() => {
        handleListGetAll();
    }, []);

    return (
        <Modal
            isOpen={ isOpenModal }
            style={ customStyles }
            onRequestClose={ closeModal }
            ariaHideApp={false}
        >
            <Typography variant="h6" gutterBottom component="div">
                Editar Sancion
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="alumno"
                        name="alumno"
                        value={ alumno }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Alumno"
                        error={Boolean(errors?.alumno)}
                        helperText={errors?.alumno}
                    >
                        <MenuItem value="" disabled>Seleccione un alumno</MenuItem>
                        { alumnosList.map((a) => (
                            <MenuItem key={a.documento} value={ a.documento }>
                                { `${ a.apellido } ${ a.nombre }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="docente"
                        name="docente"
                        value={ docente }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Docente"
                        error={Boolean(errors?.docente)}
                        helperText={errors?.docente}
                    >
                        <MenuItem value="" disabled>Seleccione un docente</MenuItem>
                        { docentesList.map((d) => (
                            <MenuItem key={d.documento} value={ d.documento }>
                                { `${ d.apellido } ${ d.nombre }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="tipoSancion"
                        name="tipoSancion"
                        value={ tipoSancion }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Tipo de Sancion"
                        error={Boolean(errors?.tipoSancion)}
                        helperText={errors?.tipoSancion}
                    >
                        <MenuItem value="" disabled>Seleccione un alumno</MenuItem>
                        { tiposSanciones.map((ts) => (
                            <MenuItem key={ts} value={ts}>
                                { ts }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="descripcion"
                        name="descripcion"
                        value={ descripcion }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Descripcion"
                        error={Boolean(errors?.descripcion)}
                        helperText={errors?.descripcion}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                        fullWidth
                        id="fecha"
                        name="fecha"
                        value={fecha}
                        type="date"
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Fecha"
                        error={Boolean(errors?.fecha)}
                        helperText={errors?.fecha}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        onClick={
                            () => handleEditSancion(formValues)
                        }
                        variant="contained"
                    >
                        Editar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        onClick={ () => {
                            resetErrors();
                            closeModal();
                        } }
                        variant="outlined"
                    >
                       Cerrar
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    );
};

SancionModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
}
