import React, { useContext } from 'react';
import { MateriasContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { materiaModel, regimenes } from '../../Utils/Model/materiaModel';

export const MateriasSave = () => {
    const {
        active,
        handleAddMateria,
        handleEditMateria,
        handleBack
    } = useContext(MateriasContext);

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        planEstudio,
        regimen
    } = formValues;

    return (
        <div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="regimen">Regimen</label>
                <select
                    id="regimen"
                    name="regimen"
                    value={regimen} onChange={handleInputChange}
                >
                    <option value="" disabled>selecione un aula</option>
                    { regimenes.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="planEstudio">Plan de Estudio</label>
                <input
                    type="text"
                    id="planEstudio"
                    name="planEstudio"
                    value={planEstudio}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {
                    active === materiaModel
                    ? (
                        <button onClick={ () => handleAddMateria(formValues) } >
                            Guardar
                        </button>
                    )
                    : (
                        <button onClick={ () => handleEditMateria(formValues) } >
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
    )
}
