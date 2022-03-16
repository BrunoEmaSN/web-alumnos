import React, { useContext } from 'react';
import { useForm } from '../../Hooks/useForm';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosPareja } from '../../Template/DatosPareja';
import { DatosTutor } from '../../Template/DatosTutor';
import { tutorModel } from '../../Utils/Model/tutorModel';
import { TutoresContext } from '../../Context/BuildContext';

export const TutoresSave = () => {
    const {
        active,
        handleAddTutor,
        handleEditTutor,
        handleBack
    } = useContext(TutoresContext);
    
    const [ formValues, handleInputChange ] = useForm( active );

    return (
        <div>
            <h1>Tutor Save</h1>
                <DatosPersonales
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosTutor
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosPareja
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />

                <div>
                    {
                        active === tutorModel
                        ? (
                            <button onClick={ () => handleAddTutor(formValues) }>
                                Guardar
                            </button>
                        )
                        : (
                            <button onClick={ () => handleEditTutor(formValues) }>
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
