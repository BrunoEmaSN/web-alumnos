import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TutoresContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeTutor, cleanActiveTutor, startDeletingTutor, startLoadingTutores, startNewTutor, startSetActive, startUpdateTutor } from '../Store/Tutor/Actions/Tutor';
import { tutorModel } from '../Utils/Model/tutorModel';
import { useIsValidate } from '../Hooks/useIsValidate';

const initialState = {
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    fechaNacimiento: '',
    sexo: '',
    lugarNacimiento: '',
    domicilio: '',
}

export const TutoresState = ({ children }) => {
    const dispatch = useDispatch();

    const { tutores, active } = useSelector( state => state.tutor );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger, handleValidateDate ] = useIsValidate();

    useEffect(() => {
        dispatch( startLoadingTutores() );
    }, []);

    const handleCreate = () => {
        dispatch( activeTutor( tutorModel ) );
    }
    const handleEdit = ( documento ) => {
        dispatch( startSetActive( documento ) );
    }
    const handleDelete = ( documento ) => {
        dispatch( startDeletingTutor( documento ) );
    }

    const handleAddTutor = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startNewTutor( formValues ) );
            dispatch( cleanActiveTutor() );
        }
    }
    const handleEditTutor = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateTutor( formValues ) );
            dispatch( cleanActiveTutor() );
        }
    }
    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveTutor() );
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;
        if(!handleValidateString(formValues.nombre)){
            isValid = false;
            newState = {...newState, nombre: 'es necesario un nombre'};
        }
        if(!handleValidateString(formValues.apellido)){
            isValid = false;
            newState = {...newState, apellido: 'es necesario un apellido'};
        }
        if(!handleValidateString(formValues.tipoDocumento)){
            isValid = false;
            newState = {...newState, tipoDocumento: 'tiene que seleccionar un tipo'};
        }
        if(!handleValidateInterger(formValues.documento)){
            isValid = false;
            newState = {...newState, documento: 'es necesario el documento'};
        }
        if(!handleValidateDate(formValues.fechaNacimiento)){
            isValid = false;
            newState = {...newState, fechaNacimiento: 'es necesario la fecha de nacimiento'};
        }
        if(!handleValidateString(formValues.sexo)){
            isValid = false;
            newState = {...newState, sexo: 'tiene que seleccionar el sexo'};
        }
        if(!handleValidateString(formValues.lugarNacimiento)){
            isValid = false;
            newState = {...newState, lugarNacimiento: 'es necesario el lugar de nacimiento'};
        }
        if(!handleValidateString(formValues.domicilio)){
            isValid = false;
            newState = {...newState, domicilio: 'es necesario el domicilio'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <TutoresContext.Provider value={{
            tutores,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddTutor,
            handleEditTutor,
            handleBack,
            errors
        }}>
            {children}
        </TutoresContext.Provider>
    )
}

TutoresState.propTypes = {
    children: PropTypes.element
}