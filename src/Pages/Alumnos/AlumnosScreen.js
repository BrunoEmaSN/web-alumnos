import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingAlumnos } from '../../Store/Alumno/Actions/Alumno';
import { AlumnosList } from './AlumnosList';
import { AlumnosSave } from './AlumnosSave';

export const AlumnosScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingAlumnos() );
    }, []);
    

    const { active } = useSelector( state => state.alumno );
    
    return (
        <div>
            { Object.entries(active).length ? <AlumnosSave /> : <AlumnosList /> }
        </div>
    )
}
