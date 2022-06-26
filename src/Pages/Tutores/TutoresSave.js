import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosPareja } from '../../Template/DatosPareja';
import { DatosTutor } from '../../Template/DatosTutor';
import { tutorModel } from '../../Utils/Model/tutorModel';
import { TutoresContext } from '../../Context/BuildContext';
import { Box, Button, Grid } from '@mui/material';

export const TutoresSave = () => {
    const {
        active,
        handleAddTutor,
        handleEditTutor,
        handleBack,
        errors
    } = useContext(TutoresContext);
    
    const [ formValues, handleInputChange ] = useForm( active );

    return (
        <Box>
            <DatosPersonales
                { ...formValues }
                handleInputChange={ handleInputChange }
                errors={errors}
            />
            <DatosTutor
                { ...formValues }
                handleInputChange={ handleInputChange }
            />
            <DatosPareja
                { ...formValues }
                handleInputChange={ handleInputChange }
            />
            <Box sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        {
                            active === tutorModel
                            ? (
                                <Button
                                    fullWidth
                                    onClick={
                                        () => handleAddTutor(formValues)
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
                                        () => handleEditTutor(formValues)
                                    }
                                    variant="contained"
                                >
                                    Editar
                                </Button>
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={ handleBack }
                            variant="outlined"
                        >
                            Volver
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
