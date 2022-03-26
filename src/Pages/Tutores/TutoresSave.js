import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosPareja } from '../../Template/DatosPareja';
import { DatosTutor } from '../../Template/DatosTutor';
import { tutorModel } from '../../Utils/Model/tutorModel';
import { TutoresContext } from '../../Context/BuildContext';
import { Box, Grid } from '@mui/material';
import {
    ButtonContained,
    ButtonOutlined
} from '../../Components/GlobalStylesComponents/stylesComponents';

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
                                <ButtonContained
                                    CallBack={
                                        () => handleAddTutor(formValues)
                                    }
                                    label="Guardar"
                                />
                            )
                            :  (
                                <ButtonContained
                                    CallBack={
                                        () => handleEditTutor(formValues)
                                    }
                                    label="Editar"
                                />
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonOutlined
                            CallBack={ handleBack }
                            label="Volver"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
