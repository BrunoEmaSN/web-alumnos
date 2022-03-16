import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
    activeCalificacion,
    cleanActiveCalificacion,
    startLoadingCalificaciones,
    startUpdateCalificacion
} from '../Store/Calificacion/Actions/Calificacion';
import { CalificacionesContext } from './BuildContext';

export const CalificacionesState = ({ children }) => {
    const dispatch = useDispatch();

    const { calificaciones, active } = useSelector( state => state.calificacion );

    useEffect(() => {
        dispatch( startLoadingCalificaciones() );
    }, []);

    const handleEdit = (c) => {
		dispatch(activeCalificacion(c));
	};
    
    const handleEditCalificacion = ( formValues ) => {
        dispatch( startUpdateCalificacion( formValues ) );
        dispatch( cleanActiveCalificacion() );
    }

    const handleBack = () => {
        dispatch( cleanActiveCalificacion() );
    }

    return (
        <CalificacionesContext.Provider value={{
            calificaciones,
            active,
            handleEdit,
            handleEditCalificacion,
            handleBack
        }}>
            {children}
        </CalificacionesContext.Provider>
    );
}

CalificacionesState.propTypes = {
    children: PropTypes.element
}