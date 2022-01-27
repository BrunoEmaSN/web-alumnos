import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startNewAlumno } from '../../Store/Alumno/Actions/Alumno';

export const AlumnosScreen = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( startNewAlumno() );
    }
    
    return (
        <div>
            <Link to="/Alumnos/Save" onClick={ handleClick }>Save</Link>
            <h1>AlumnosScreen</h1>
        </div>
    )
}
