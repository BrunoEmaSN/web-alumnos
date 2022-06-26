import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { useForm } from '../../Hooks/useForm';
import { aulasGetAll } from '../../Services/restCallAulas';
import { CursosContext } from '../../Context/BuildContext';
import { customStyles } from '../../Utils/modalStyles';
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';

export const CursoModal = ({ isOpenModal, closeModal, action }) => {
    const {
        active,
        actions,
        handleAddCurso,
        handleEditCurso,
        errors,
        resetErrors
    } = useContext(CursosContext);

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        nivel,
        turno,
        division,
        gradoAno,
        aula
    } = formValues;

    const [ aulas, setAulas ] = useState([]);

    const handleAulasGetAll = async () => {
        setAulas( await aulasGetAll() );
    }

    useEffect(() => {
        handleAulasGetAll();
    }, []);
    
    
    return (
        <Modal
            isOpen={ isOpenModal }
            style={ customStyles }
            onRequestClose={ closeModal }
            ariaHideApp={false}
        >
            <Typography variant="h6" gutterBottom component="div">
                { action === actions.create ? 'Crear Nuevo Curso' : 'Editar Curso' }
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="nivel"
                        name="nivel"
                        value={ nivel }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Nivel"
                        error={Boolean(errors?.nivel)}
                        helperText={errors?.nivel}
                        size="small"
                    >
                        <MenuItem value="" disabled>
                            Seleccione un nivel
                        </MenuItem>
                        <MenuItem value="P">Primaria</MenuItem>
                        <MenuItem value="S">Secundaria</MenuItem>
                        <MenuItem value="T">Terciaria</MenuItem>
                        <MenuItem value="U">Universidad</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="turno"
                        name="turno"
                        value={ turno }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Turno"
                        error={Boolean(errors?.turno)}
                        helperText={errors?.turno}
                        size="small"
                    >
                        <MenuItem value="" disabled>
                            Seleccione un turno
                        </MenuItem>
                        <MenuItem value="Mañana">Mañana</MenuItem>
                        <MenuItem value="Tarde">Tarde</MenuItem>
                        <MenuItem value="Noche">Noche</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="division"
                        name="division"
                        value={ division }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true}}
                        margin="normal"
                        label="Division"
                        error={Boolean(errors?.division)}
                        helperText={errors?.division}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="gradoAno"
                        name="gradoAno"
                        value={ gradoAno }
                        type="number"
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true}}
                        margin="normal"
                        label="Grado/Año"
                        error={Boolean(errors?.gradoAno)}
                        helperText={errors?.gradoAno}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="aulas"
                        name="aula"
                        value={ aula }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Aula"
                        error={Boolean(errors?.aula)}
                        helperText={errors?.aula}
                        size="small"
                    >
                        <MenuItem value="" disabled>
                            Seleccione un aula
                        </MenuItem>
                        { aulas.map((a) => (
                            <MenuItem key={ a.id } value={ a.id }>
                                { a.descripcion }
                            </MenuItem>
                        )) }  
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    {
                        action === actions.create
                        ? (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleAddCurso(formValues)
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
                                    () => handleEditCurso(formValues)
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

CursoModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
}