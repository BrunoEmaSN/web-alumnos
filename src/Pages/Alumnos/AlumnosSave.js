import React, { useContext, useEffect, useState } from 'react';

import { AlumnosContext } from '../../Context/BuildContext';
import { DatosAcademicos } from '../../Template/DatosAcademicos';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosAlumnoMateria } from '../../Template/DatosAlumnoMateria';
import { DatosAlumnoTutores } from '../../Template/DatosAlumnoTutores';
import { cursosGetAll } from '../../Services/restCallCursos';
import { useForm } from '../../Hooks/useForm';
import { Box, Grid } from '@mui/material';
import {
    ButtonContained,
    ButtonOutlined
} from '../../Components/GlobalStylesComponents/stylesComponents';

export const AlumnosSave = () => {
    const {
        active,
        alumnoModel,
        handleAddAlumno,
        handleEditAlumno,
        handleBack,
        errors
    } = useContext(AlumnosContext);

    const [
        formValues,
        handleInputChange,
        handleCheckboxChange,
        handleObjectChange,
    ] = useForm( active );

    const [ cursosList, setCursosList ] = useState([]);
    const handleCursosGet = async () => {
        setCursosList( await cursosGetAll() );
    }
    useEffect(() => {
        handleCursosGet();
    }, []);
    
    return (
        <Box>
            <DatosPersonales
                { ...formValues }
                handleInputChange={ handleInputChange }
                errors={errors}
            />
            <DatosAcademicos
                { ...formValues }
                cursosList={ cursosList }
                handleInputChange={ handleInputChange }
                handleCheckboxChange={ handleCheckboxChange }
                handleObjectChange={ handleObjectChange }
                errors={errors}
            />
            <DatosAlumnoTutores
                { ...formValues }
                handleInputChange={ handleInputChange }
            />
            <DatosAlumnoMateria
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
                            active === alumnoModel
                            ? (
                                <ButtonContained
                                    CallBack={
                                        () => handleAddAlumno(formValues)
                                    }
                                    label="Guardar"
                                />
                            )
                            :  (
                                <ButtonContained
                                    CallBack={
                                        () => handleEditAlumno(formValues)
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
    )
}
