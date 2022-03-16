import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import {
    cleanActiveDocente,
    startNewDocente,
    startUpdateDocente
} from '../../Store/Docente/Actions/Docente';
import { DatosDocente } from '../../Template/DatosDocente';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosDocenteMateria } from '../../Template/DatosDocenteMateria';
import { docenteModel } from '../../Utils/Model/docenteModel';

export const DocentesSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.docente );

    const [
        formValues,
        handleInputChange,
        handleCheckboxChange
    ] = useForm( active );

    const handleAddDocente = ( e ) => {
        e.preventDefault();
        dispatch( startNewDocente( formValues ) );
        dispatch( cleanActiveDocente() );
    }

    const handleEditDocente = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateDocente( formValues ) );
        dispatch( cleanActiveDocente() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveDocente() );
    }
    return (
        <div>
            <h1>Docente Save</h1>  
                <DatosPersonales
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosDocente
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                    handleCheckboxChange={ handleCheckboxChange }
                />
                <DatosDocenteMateria
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <div>
                    {
                        active === docenteModel
                        ? (
                            <button onClick={ handleAddDocente }>
                                Guardar
                            </button>
                        )
                        : (
                            <button onClick={ handleEditDocente }>
                                Editar
                            </button>
                        )
                    }
                </div>
                <div>
                    <button onClick={ back }>
                        Volver
                    </button>
                </div>
        </div>
    );
};
