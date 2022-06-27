import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { customStyles } from '../../Utils/modalStyles';
import { AulasContext } from '../../Context/BuildContext';
import { Grid, TextField, Box } from '@mui/material';
import {
    ButtonContained,
    ButtonOutlined,
    TypographyH6
} from '../../Components/GlobalStylesComponents/stylesComponents';

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
            open={isOpenModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={customStyles}
            >

                <TypographyH6
                    label={
                        action === actions.create
                        ? 'Crear Nueva Aula'
                        : 'Editar Aula'
                    }
                />
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
                                <ButtonContained
                                    CallBack={
                                        () => handleAddAula(formValues)
                                    }
                                    label="Guardar"
                                />
                            )
                            :  (
                                <ButtonContained
                                    CallBack={
                                        () => handleEditAula(formValues)
                                    }
                                    label="Editar"
                                />
                            )
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonOutlined
                            CallBack={
                                () => {
                                    resetErrors();
                                    closeModal(); 
                                }
                            }
                            label="Cerrar"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

AulasModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
}