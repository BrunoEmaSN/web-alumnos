import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SancionesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../Hooks/useModal';
import {
    cleanActiveSancion,
    startLoadingSanciones,
    startSetActive,
    startUpdateSancion
} from '../Store/Sancion/Actions/Sancion';
import { useIsValidate } from '../Hooks/useIsValidate';

const initialState = {
    alumno: '',
    docente: '',
    tipoSancion: '',
    descripcion: '',
    fecha: ''
}

export const SancionesState = ({children}) => {
    const dispatch = useDispatch();

    const { sanciones, active } = useSelector( state => state.sancion );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger, handleValidateDate ] = useIsValidate();

    useEffect(() => {
        dispatch( startLoadingSanciones() );
    }, [dispatch]);

    const handleUpdate = ( sancion ) => {
        dispatch( startSetActive( sancion ) );
        openModal();
    }

    const handleEditSancion = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateSancion( formValues ) );
            dispatch( cleanActiveSancion() );
            closeModal();
        }
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;

        if (!handleValidateInterger(formValues.alumno)){
            isValid = false;
            newState = {...newState, alumno: 'tiene que selecionar un alumno'};
        }
        if(!handleValidateInterger(formValues.docente)){
            isValid = false;
            newState = {...newState, docente: 'tiene que selecionar un docente'};
        }
        if(!handleValidateString(formValues.tipoSancion)){
            isValid = false;
            newState = {...newState, tipoSancion: 'tiene que selecionar el tipo'}
        }
        if(!handleValidateString(formValues.descripcion)){
            isValid = false;
            newState = {...newState, descripcion: 'es necesario una descripcion'}
        }
        if(!handleValidateDate(formValues.fecha)){
            isValid = false;
            newState = {...newState, fecha: 'es necesario una fecha'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <SancionesContext.Provider value={{
            sanciones,
            active,
            isOpenModal,
            openModal,
            closeModal,
            handleUpdate,
            handleEditSancion,
            errors,
            resetErrors
        }}>
            {children}
        </SancionesContext.Provider>
    )
}

SancionesState.propTypes = {
    children: PropTypes.element
}