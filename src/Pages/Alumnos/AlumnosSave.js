import React, { useContext, useEffect, useState } from 'react';

import { AlumnosContext } from '../../Context/BuildContext';
import { DatosAcademicos } from '../../Template/DatosAcademicos';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosAlumnoMateria } from '../../Template/DatosAlumnoMateria';
import { DatosAlumnoTutores } from '../../Template/DatosAlumnoTutores';
import { cursosGetAll } from '../../Services/restCallCursos';
import { useForm } from '../../Hooks/useForm';

export const AlumnosSave = () => {
    const {
        active,
        alumnoModel,
        handleAddAlumno,
        handleEditAlumno,
        handleBack
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
        <div>
            
                <DatosPersonales
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosAcademicos
                    { ...formValues }
                    cursosList={ cursosList }
                    handleInputChange={ handleInputChange }
                    handleCheckboxChange={ handleCheckboxChange }
                    handleObjectChange={ handleObjectChange }
                />
                <DatosAlumnoTutores
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosAlumnoMateria
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <div>
                    {
                        active === alumnoModel
                        ? (
                            <button onClick={
                                () => handleAddAlumno(formValues)
                            }>
                                Guardar
                            </button>
                        )
                        :  (
                            <button onClick={
                                () => handleEditAlumno(formValues)
                            }>
                                Editar
                            </button>
                        )
                    }
                </div>
                <div>
                    <button onClick={ handleBack }>Volver</button>
                </div>
        </div>
    )
}
