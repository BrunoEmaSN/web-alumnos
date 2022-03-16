import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AlumnosContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import {
    startLoadingAlumnos,
	startSetActive,
	startDeletingAlumno,
	activeAlumno,
    cleanActiveAlumno,
    startNewAlumno,
    startUpdateAlumno
} from '../Store/Alumno/Actions/Alumno';
import { alumnoModel } from '../Utils/Model/alumnoModel';

export const AlumnosState = ({ children }) => {
    const dispatch = useDispatch();

	const { alumnos, active } = useSelector( state => state.alumno);

    useEffect(() => {
        dispatch( startLoadingAlumnos() );
    }, []);

    const handleAddAlumno = ( formValues ) => {
        dispatch( startNewAlumno( formValues ) );
        dispatch( cleanActiveAlumno() );
    }

    const handleEditAlumno = ( formValues ) => {
        dispatch( startUpdateAlumno( formValues ) );
        dispatch( cleanActiveAlumno() );
    }

    const handleBack = () => {
        dispatch( cleanActiveAlumno() );
    }

	const handleCreate = () => {
		dispatch(activeAlumno(alumnoModel));
	};

	const handleEdit = (documento) => {
		dispatch(startSetActive(documento));
	};

	const handleDelete = (documento) => {
		dispatch(startDeletingAlumno(documento));
	};

    return (
        <AlumnosContext.Provider value={{
            alumnos,
            active,
            alumnoModel,
            handleAddAlumno,
            handleEditAlumno,
            handleBack,
            handleCreate,
            handleEdit,
            handleDelete
        }}>
            { children }
        </AlumnosContext.Provider>
    )
}

AlumnosState.propTypes = {
    children: PropTypes.element
}