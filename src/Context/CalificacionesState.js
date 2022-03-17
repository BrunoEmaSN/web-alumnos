import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
    activeCalificacion,
    cleanActiveCalificacion,
    startLoadingCalificaciones,
    startUpdateCalificacion
} from '../Store/Calificacion/Actions/Calificacion';
import { CalificacionesContext } from './BuildContext';
import { useIsValidate } from '../Hooks/useIsValidate';
import { useModal } from '../Hooks/useModal';
import { calificacionesGetOne } from '../Services/restCallCalificaciones';

const initialState = {
    regimen: '',
    etapa: '',
    nota: '',
    descripcion: '',
    alumno_id: '',
    materia_id: '',
    docente_id: '',
}

export const CalificacionesState = ({ children }) => {
    const dispatch = useDispatch();

    const { calificaciones, active } = useSelector( state => state.calificacion );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger ] = useIsValidate();
    const [ data, setData ] = useState(false);
    const [ isOpenModalView, openModalView, closeModalView ] = useModal( false );

    useEffect(() => {
        dispatch( startLoadingCalificaciones() );
    }, []);

    const handleEdit = (c) => {
		dispatch(activeCalificacion(c));
	};

    const handleView = async (id) => {
        const newData = await calificacionesGetOne(id);
        setData( Object.entries(newData) );
        openModalView();
    }
    
    const handleEditCalificacion = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateCalificacion( formValues ) );
            dispatch( cleanActiveCalificacion() );
        }
    }

    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveCalificacion() );
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;
        if(!handleValidateString(formValues.regimen)){
            isValid = false;
            newState = {...newState, regimen: 'tiene que selecionar un regimen'};
        }
        if(!handleValidateString(formValues.etapa)){
            isValid = false;
            newState = {...newState, etapa: 'tiene que selecionar una etapa'}
        }
        if(!handleValidateInterger(formValues.nota)){
            isValid = false;
            newState = {...newState, nota: 'es necesario una nota'};
        }
        if(!handleValidateString(formValues.descripcion)){
            isValid = false;
            newState = {...newState, descripcion: 'es necesario una descripcion'};
        }
        if(!handleValidateInterger(formValues.alumno_id)){
            isValid = false;
            newState = {...newState, alumno_id: 'tiene que elegir un alumno'};
        }
        if(!handleValidateInterger(formValues.materia_id)){
            isValid = false;
            newState = {...newState, materia_id: 'tiene que elegir una materia'};
        }
        if(!handleValidateInterger(formValues.docente_id)){
            isValid = false;
            newState = {...newState, docente_id: 'tiene que elegir un docente'};
        }
        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <CalificacionesContext.Provider value={{
            calificaciones,
            active,
            handleEdit,
            handleEditCalificacion,
            handleBack,
            errors,
            isOpenModalView,
            handleView,
            closeModalView,
            data
        }}>
            {children}
        </CalificacionesContext.Provider>
    );
}

CalificacionesState.propTypes = {
    children: PropTypes.element
}