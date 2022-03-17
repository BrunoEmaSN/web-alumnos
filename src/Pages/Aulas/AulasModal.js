import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { customStyles } from '../../Utils/modalStyles';
import { AulasContext } from '../../Context/BuildContext';
import { Button, Grid, TextField, Typography } from '@mui/material';

export const AulasModal = ({ isOpenModal, closeModal, action }) => {
    const {
        actions,
        handleAddAula,
        handleEditAula,
        errors,
        resetErrors
    } = useContext(AulasContext);
    const { active } = useSelector( state => state.aula );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        capacidad
    } = formValues;
    
    return (
        <Modal
            isOpen={ isOpenModal }
            style={ customStyles }
            onRequestClose={ closeModal }
            ariaHideApp={false}
        >
            <Typography variant="h6" gutterBottom component="div">
                { action === actions.create ? 'Crear Nueva Aula' : 'Editar Aula' }
            </Typography>
            <Grid container spacing={2}>
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
                        id="capacidad"
                        name="capacidad"
                        type="number"
                        value={ capacidad }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Capacidad"
                        error={Boolean(errors?.capacidad)}
                        helperText={errors?.capacidad}
                    />
                </Grid>
                <Grid item xs={12}>
                    {
                        action === actions.create
                        ? (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleAddAula(formValues)
                                }
                                variant="contained"
                            >
                                Guardar
                            </Button>
                        )
                        :  (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleEditAula(formValues)
                                }
                                variant="contained"
                            >
                                Editar
                            </Button>
                        )
                    }
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

AulasModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
}