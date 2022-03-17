import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MesasExamenesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeMesaExamen, cleanActiveMesaExamen, startDeletingMesaExamen, startLoadingMesasExamenes, startNewMesaExamen, startSetActive, startUpdateMesaExamen } from '../Store/MesaExamen/Actions/MesaExamen';
import { mesaExamenModel } from '../Utils/Model/mesaExamenModel';
import { useIsValidate } from '../Hooks/useIsValidate';

const initialStateMaestro = {
    descripcion: '',
    periodo_id: ''
}

const initialStateNovedad = {
    materia_id: '',
    fecha: '',
    llamado: '',
    examinador1: '',
    examinador2: '',
    examinador3: ''
}

export const MesasExamenesState = ({ children }) => {
    const dispatch = useDispatch();

    const { mesasExamenes, active } = useSelector( state => state.mesaExamen );

    const [handleValidateString, handleValidateInterger ] = useIsValidate();
    const [errorMaestro, setErrorMaestro] = useState(initialStateMaestro);
    const [errorNovedad, setErrorNovedad] = useState(initialStateNovedad);
    
    useEffect(() => {
        dispatch( startLoadingMesasExamenes() );
    }, []);

    const handleCreate = () => {
        dispatch( activeMesaExamen( mesaExamenModel ) );
    }
    const handleEdit = ( m ) => {
        dispatch( startSetActive( m ) );
    }
    const handleDelete = ( id) => {
        dispatch( startDeletingMesaExamen( id) );
    }

    const handleAddMesaExamen = (formValues, novedad) => {
        if(handleErrorsMaestro(formValues)){
            dispatch( startNewMesaExamen( { maestro: formValues, novedad } ) );
            dispatch( cleanActiveMesaExamen() );
        }
    }

    const handleEditMesaExamen = (formValues, novedad) => {
        if(handleErrorsMaestro(formValues)){
            dispatch( startUpdateMesaExamen( { maestro: formValues, novedad } ) );
            dispatch( cleanActiveMesaExamen() );
        }
    }

    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveMesaExamen() );
    }

    const handleErrorsMaestro = (formValues) => {
        let isValid = true;
        let newState = initialStateMaestro;

        if(!handleValidateString(formValues.descripcion)){
            isValid = false;
            newState = {...newState, descripcion: 'es necesario una descripcion'};
        }
        if(!handleValidateInterger(formValues.periodo_id)){
            isValid = false;
            newState = {...newState, periodo_id: 'tiene que selecionar un periodo'};
        }
        setErrorMaestro(newState);
        return(isValid);
    }

    const handleErrorsNovedad = (formValues) => {
        let isValid = true;
        let newState = initialStateNovedad;
        
        if(!handleValidateInterger(formValues.materia_id)){
            isValid = false;
            newState = {...newState, materia_id: 'tiene que selecionar una materia'};
        }
        if(!handleValidateInterger(formValues.fecha)){
            isValid = false;
            newState = {...newState, fecha: 'es necesario una fecha'};
        }
        if(!handleValidateString(formValues.llamado)){
            isValid = false;
            newState = {...newState, llamado: 'tiene que selecionar un llamado'};
        }
        if(!handleValidateString(formValues.examinador1)){
            isValid = false;
            newState = {...newState, examinador1: 'es necesario el exanimador 1'};
        }
        if(!handleValidateString(formValues.examinador2)){
            isValid = false;
            newState = {...newState, examinador2: 'es necesario el exanimador 2'};
        }
        if(!handleValidateString(formValues.examinador3)){
            isValid = false;
            newState = {...newState, examinador3: 'es necesario el exanimador 3'};
        }
        setErrorNovedad(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrorMaestro(initialStateMaestro);
        setErrorNovedad(initialStateNovedad);
    }

    return (
        <MesasExamenesContext.Provider value={{
            mesasExamenes,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddMesaExamen,
            handleEditMesaExamen,
            handleBack,
            errorMaestro,
            errorNovedad,
            handleErrorsNovedad
        }}>
            {children}
        </MesasExamenesContext.Provider>
    )
}

MesasExamenesState.propTypes = {
    children: PropTypes.element
}