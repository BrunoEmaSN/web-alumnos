import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { DatosDocente } from '../../Template/DatosDocente';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosDocenteMateria } from '../../Template/DatosDocenteMateria';
import { docenteModel } from '../../Utils/Model/docenteModel';
import { DocentesContext } from '../../Context/BuildContext';

export const DocentesSave = () => {
    const {
        active,
        handleAddDocente,
        handleEditDocente,
        handleBack
    } = useContext(DocentesContext);

    const [
        formValues,
        handleInputChange,
        handleCheckboxChange
    ] = useForm( active );
    
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
                            <button onClick={ () => handleAddDocente(formValues) }>
                                Guardar
                            </button>
                        )
                        : (
                            <button onClick={ () => handleEditDocente(formValues) }>
                                Editar
                            </button>
                        )
                    }
                </div>
                <div>
                    <button onClick={ handleBack }>
                        Volver
                    </button>
                </div>
        </div>
    );
};
