import React, { useEffect, useState } from 'react';
import PropTyes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
    activeClase,
    cleanActiveClase,
    startDeletingClase,
    startLoadingClases,
    startNewClase,
    startSetActive,
    startUpdateClase
} from '../Store/Clase/Actions/Clase';
import { claseModel } from '../Utils/Model/claseModel';
import { ClasesContext } from './BuildContext';
import { useIsValidate } from '../Hooks/useIsValidate';

const initialState = {
    dias: '',
    horarioInicio: '',
    horarioFin: '',
    docente: '',
    materia: '',
    periodo: '',
    curso: '',
}

export const ClasesState = ({ children }) => {
    const dispatch = useDispatch();

	const { clases, active } = useSelector( state => state.clase );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger, handleValidateDate ] = useIsValidate();

    useEffect(() => {
        dispatch( startLoadingClases() );
    }, []);

	const handleCreate = () => {
		dispatch(activeClase(claseModel));
	}

	const handleEdit = (id) => {
		dispatch(startSetActive(id));
	}

	const handleDelete = (id) => {
		dispatch(startDeletingClase(id));
	}

    const handleAddclase = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startNewClase( formValues ) );
            dispatch( cleanActiveClase() );
        }
    }

    const handleEditclase = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateClase( formValues ) );
            dispatch( cleanActiveClase() );
        }
    }

    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveClase() );
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;

        if(!handleValidateString(formValues.dias)){
            isValid = false;
            newState = {...newState, dias: 'tiene que selecionar un dia'};
        }
        if(!handleValidateDate(formValues.horarioInicio)){
            isValid = false;
            newState = {...newState, horarioInicio: 'es necesario el horario de inicio'};
        }
        if(!handleValidateDate(formValues.horarioFin)){
            isValid = false;
            newState = {...newState, horarioFin: 'es necesario el horario de fin'}
        }
        if(!handleValidateInterger(formValues.docente)){
            isValid = false;
            newState = {...newState, docente: 'tiene que selecionar un docente'};
        }
        if(!handleValidateInterger(formValues.materia)){
            isValid = false;
            newState = {...newState, materia: 'tiene que selecionar una materia'};
        }
        if(!handleValidateInterger(formValues.curso)){
            isValid = false;
            newState = {...newState, curso: 'tiene que selecionar un curso'};
        }
        if(!handleValidateInterger(formValues.periodo)){
            isValid = false;
            newState = {...newState, periodo: 'tiene que selecionar un periodo'}
        }
        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <ClasesContext.Provider value={{
            clases,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddclase,
            handleEditclase,
            handleBack,
            errors
        }}>
            {children}
        </ClasesContext.Provider>
    )
}

ClasesState.propTypes = {
    children: PropTyes.element
}