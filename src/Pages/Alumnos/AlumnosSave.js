import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanActiveAlumno, startNewAlumno, startUpdateAlumno } from '../../Store/Alumno/Actions/Alumno';
import { DatosAcademicos } from '../../Template/DatosAcademicos';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosAlumnoMateria } from '../../Template/DatosAlumnoMateria';
import { DatosAlumnoTutores } from '../../Template/DatosAlumnoTutores';
import { useForm } from '../../Hooks/useForm';
import { alumnoModel } from '../../Utils/alumnoModel';
import { cursosGetAll } from '../../Services/restCallCursos';

export const AlumnosSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.alumno );

    const [ formValues, handleInputChange, handleCheckboxChange, handleObjectChange ] = useForm( active );

    const [ cursosList, setCursosList ] = useState([]);

    const handleCursosGet = async () => {
        setCursosList( await cursosGetAll() );
    }

    useEffect(() => {
        handleCursosGet();
    }, []);

    const handleAddAlumno = ( e ) => {
        e.preventDefault();
        dispatch( startNewAlumno( formValues ) );
        dispatch( cleanActiveAlumno() );
    }

    const handleEditAlumno = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateAlumno( formValues ) );
        dispatch( cleanActiveAlumno() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveAlumno() );
    }
    
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
                    <button onClick={ active === alumnoModel ? handleAddAlumno :  handleEditAlumno }>
                        Guardar
                    </button>
                </div>
                <div>
                    <button onClick={ back }>Volver</button>
                </div>
        </div>
    )
}
