import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlumnos } from '../../Store/Alumno/Actions/Alumno';
import { Alumno1 } from '../../Utils/alumnoModel';
import { AlumnosList } from './AlumnosList';
import { AlumnosSave } from './AlumnosSave';

export const AlumnosScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getAlumnos( Alumno1 ) );
    }, []);
    

    const { active } = useSelector( state => state.alumno );
    
    return (
        <div>
            { Object.entries(active).length ? <AlumnosSave /> : <AlumnosList /> }
        </div>
    )
}
