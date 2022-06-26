import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DocentesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeDocente, cleanActiveDocente, startDeletingDocente, startLoadingDocentes, startNewDocente, startSetActive, startUpdateDocente } from '../Store/Docente/Actions/Docente';
import { docenteModel } from '../Utils/Model/docenteModel';
import { useIsValidate } from '../Hooks/useIsValidate';
import { useModal } from '../Hooks/useModal';
import { docentesGetOne } from '../Services/restCallDocentes';

const initialState = {
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    fechaNacimiento: '',
    sexo: '',
    lugarNacimiento: '',
    domicilio: '',
    cuit: '',
    titulo: '',
}

export const DocentesState = ({ children }) => {
    const dispatch = useDispatch();

    const { docentes, active } = useSelector( state => state.docente );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger, handleValidateDate ] = useIsValidate();
    const [ data, setData ] = useState(false);
    const [ isOpenModalView, openModalView, closeModalView ] = useModal( false );

    useEffect(() => {
        dispatch( startLoadingDocentes() );
    }, []);

    const handleCreate = () => {
        dispatch( activeDocente( docenteModel ) );
    }
    const handleEdit = ( documento ) => {
        dispatch( startSetActive( documento ) );
    }
    const handleDelete = ( documento ) => {
        dispatch( startDeletingDocente( documento ) );
    }
    const handleView = async (id) => {
        const newData = await docentesGetOne(id);
        setData( Object.entries(newData) );
        openModalView();
    }

    const handleAddDocente = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startNewDocente( formValues ) );
            dispatch( cleanActiveDocente() );
        }
    }
    const handleEditDocente = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateDocente( formValues ) );
            dispatch( cleanActiveDocente() );
        }
    }
    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveDocente() );
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;
        console.log(formValues)
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
        if(!handleValidateInterger(formValues.cuit)){
            isValid = false;
            newState = {...newState, cuit: 'es necesario el cuit'};
        }
        if(!handleValidateString(formValues.titulo)){
            isValid = false;
            newState = {...newState, titulo: 'es necesario el titulo'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <DocentesContext.Provider value={{
            docentes,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddDocente,
            handleEditDocente,
            handleBack,
            errors,
            isOpenModalView,
            handleView,
            closeModalView,
            data        
        }}>
            {children}
        </DocentesContext.Provider>
    )
}

DocentesState.propTypes = {
    children: PropTypes.element
}