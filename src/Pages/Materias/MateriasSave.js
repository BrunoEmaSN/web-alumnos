import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveMateria, startNewMateria, startUpdateMateria } from '../../Store/Materia/Actions/Materia';
import { materiaModel } from '../../Utils/materiaModel';

const regimenes = [
    'Anual',
    'Semestral',
    'Cuatrimestral',
    'Trimestral',
    'Bimestral',
];

export const MateriasSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.materia );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        planEstudio,
        regimen
    } = formValues;

    const handleAddMateria = ( e ) => {
        e.preventDefault();
        dispatch( startNewMateria( formValues ) );
        dispatch( cleanActiveMateria() );
    }

    const handleEditMateria = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateMateria( formValues ) );
        dispatch( cleanActiveMateria() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveMateria() );
    }

    return (
        <div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="regimen">Regimen</label>
                <select id="regimen" name="regimen" value={regimen} onChange={handleInputChange}>
                    <option value="" disabled>selecione un aula</option>
                    {regimenes.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="planEstudio">Plan de Estudio</label>
                <input type="text" id="planEstudio" name="planEstudio" value={planEstudio} onChange={handleInputChange}/>
            </div>
            <div>
                <button onClick={ active === materiaModel ? handleAddMateria : handleEditMateria } >
                    Save
                </button>
            </div>
            <div>
                <button onClick={ back }>
                    Volver
                </button>
            </div>
        </div>
    )
}
