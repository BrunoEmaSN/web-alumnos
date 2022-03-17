import React, { useEffect, useState } from 'react';
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
import { useIsValidate } from '../Hooks/useIsValidate';
import { useModal } from '../Hooks/useModal';
import { alumnosGetOne } from '../Services/restCallAlumnos';

const initialState = {
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    documento: '',
    fechaNacimiento: '',
    sexo: '',
    lugarNacimiento: '',
    domicilio: '',
    cursoId: '',
    condicion: '',
}

export const AlumnosState = ({ children }) => {
    const dispatch = useDispatch();

	const { alumnos, active } = useSelector( state => state.alumno);
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger, handleValidateDate ] = useIsValidate();
    const [ data, setData ] = useState(false);
    const [ isOpenModalView, openModalView, closeModalView ] = useModal( false );

    useEffect(() => {
        dispatch( startLoadingAlumnos() );
    }, []);

    const handleAddAlumno = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startNewAlumno( formValues ) );
            dispatch( cleanActiveAlumno() );
        }
    }

    const handleEditAlumno = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateAlumno( formValues ) );
            dispatch( cleanActiveAlumno() );
        }
    }

    const handleBack = () => {
        resetErrors();
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

    const handleView = async (id) => {
        const newData = await alumnosGetOne(id);
        setData( Object.entries(newData) );
        openModalView();
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
        if(!handleValidateInterger(formValues.cursoId)){
            isValid = false;
            newState = {...newState, cursoId: 'tiene que seleccionar un curso'};
        }
        if(!handleValidateString(formValues.condicion)){
            isValid = false;
            newState = {...newState, condicion: 'tiene que seleccionar la condicion'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

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
            handleDelete,
            errors,
            isOpenModalView,
            handleView,
            closeModalView,
            data
        }}>
            { children }
        </AlumnosContext.Provider>
    )
}

AlumnosState.propTypes = {
    children: PropTypes.element
}