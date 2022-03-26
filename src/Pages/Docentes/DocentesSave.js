import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { DatosDocente } from '../../Template/DatosDocente';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosDocenteMateria } from '../../Template/DatosDocenteMateria';
import { docenteModel } from '../../Utils/Model/docenteModel';
import { DocentesContext } from '../../Context/BuildContext';
import { Box, Grid} from '@mui/material';
import {
    ButtonContained,
    ButtonOutlined
} from '../../Components/GlobalStylesComponents/stylesComponents';

export const DocentesSave = () => {
    const {
        active,
        handleAddDocente,
        handleEditDocente,
        handleBack,
        errors
    } = useContext(DocentesContext);

    const [
        formValues,
        handleInputChange,
        handleCheckboxChange
    ] = useForm( active );
    
    return (
        <Box>
                <DatosPersonales
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                    errors={errors}
                />
                <DatosDocente
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                    handleCheckboxChange={ handleCheckboxChange }
                    errors={errors}
                />
                <DatosDocenteMateria
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
                            active === docenteModel
                            ? (
                                <ButtonContained
                                    CallBack={
                                        () => handleAddDocente(formValues)
                                    }
                                    label="Guardar"
                                />
                            )
                            : (
                                <ButtonContained
                                    CallBack={
                                        () => handleEditDocente(formValues)
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
